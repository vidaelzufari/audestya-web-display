#!/usr/bin/env python3
"""
Backend API Testing Suite for Legal Services Website
Tests all backend endpoints and MongoDB integration
"""

import requests
import json
import os
import sys
from datetime import datetime
from pathlib import Path

# Load environment variables
sys.path.append('/app/backend')
from dotenv import load_dotenv

# Load frontend .env to get the backend URL
frontend_env_path = Path('/app/frontend/.env')
load_dotenv(frontend_env_path)

# Get the backend URL from frontend environment
BACKEND_URL = os.getenv('REACT_APP_BACKEND_URL')
if not BACKEND_URL:
    print("❌ ERROR: REACT_APP_BACKEND_URL not found in frontend/.env")
    sys.exit(1)

API_BASE_URL = f"{BACKEND_URL}/api"

print(f"🔗 Testing Backend API at: {API_BASE_URL}")
print("=" * 60)

class BackendTester:
    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
        self.test_results = {
            'connectivity': False,
            'hello_endpoint': False,
            'post_status': False,
            'get_status': False,
            'cors_headers': False,
            'error_handling': False,
            'mongodb_integration': False,
            'linkedin_login': False,
            'linkedin_callback_error_handling': False,
            'linkedin_posts_auth_required': False,
            'linkedin_profile_auth_required': False,
            'linkedin_invalid_token_handling': False
        }
        self.created_status_ids = []

    def test_connectivity(self):
        """Test basic connectivity to the backend"""
        print("🔍 Testing API Connectivity...")
        try:
            response = self.session.get(f"{API_BASE_URL}/", timeout=10)
            if response.status_code == 200:
                print("✅ Backend is accessible")
                self.test_results['connectivity'] = True
                return True
            else:
                print(f"❌ Backend returned status code: {response.status_code}")
                return False
        except requests.exceptions.RequestException as e:
            print(f"❌ Connection failed: {str(e)}")
            return False

    def test_hello_endpoint(self):
        """Test GET /api/ endpoint"""
        print("\n🔍 Testing GET /api/ endpoint...")
        try:
            response = self.session.get(f"{API_BASE_URL}/")
            
            if response.status_code == 200:
                data = response.json()
                if data.get('message') == 'Hello World':
                    print("✅ Hello endpoint working correctly")
                    self.test_results['hello_endpoint'] = True
                    return True
                else:
                    print(f"❌ Unexpected response: {data}")
                    return False
            else:
                print(f"❌ Status code: {response.status_code}, Response: {response.text}")
                return False
        except Exception as e:
            print(f"❌ Error testing hello endpoint: {str(e)}")
            return False

    def test_cors_headers(self):
        """Test CORS headers are present"""
        print("\n🔍 Testing CORS Headers...")
        try:
            # Test preflight OPTIONS request for CORS
            headers = {
                'Origin': 'https://example.com',
                'Access-Control-Request-Method': 'GET',
                'Access-Control-Request-Headers': 'X-Requested-With'
            }
            response = self.session.options(f"{API_BASE_URL}/", headers=headers)
            
            cors_headers = {
                'access-control-allow-origin': response.headers.get('access-control-allow-origin'),
                'access-control-allow-methods': response.headers.get('access-control-allow-methods'),
                'access-control-allow-headers': response.headers.get('access-control-allow-headers')
            }
            
            if cors_headers['access-control-allow-origin']:
                print("✅ CORS headers present")
                print(f"   Origin: {cors_headers['access-control-allow-origin']}")
                print(f"   Methods: {cors_headers['access-control-allow-methods']}")
                self.test_results['cors_headers'] = True
                return True
            else:
                print("❌ CORS headers missing")
                return False
        except Exception as e:
            print(f"❌ Error testing CORS: {str(e)}")
            return False

    def test_post_status_endpoint(self):
        """Test POST /api/status endpoint"""
        print("\n🔍 Testing POST /api/status endpoint...")
        
        # Test data with realistic client names
        test_clients = [
            "Marie Dubois",
            "Jean-Pierre Martin", 
            "Sophie Lefebvre",
            "Antoine Rousseau"
        ]
        
        success_count = 0
        
        for client_name in test_clients:
            try:
                payload = {"client_name": client_name}
                response = self.session.post(f"{API_BASE_URL}/status", json=payload)
                
                if response.status_code == 200:
                    data = response.json()
                    if (data.get('client_name') == client_name and 
                        'id' in data and 
                        'timestamp' in data):
                        print(f"✅ Created status check for {client_name}")
                        self.created_status_ids.append(data['id'])
                        success_count += 1
                    else:
                        print(f"❌ Invalid response structure for {client_name}: {data}")
                else:
                    print(f"❌ Failed to create status for {client_name}: {response.status_code}")
                    print(f"   Response: {response.text}")
            except Exception as e:
                print(f"❌ Error creating status for {client_name}: {str(e)}")
        
        if success_count == len(test_clients):
            print(f"✅ All {success_count} status checks created successfully")
            self.test_results['post_status'] = True
            self.test_results['mongodb_integration'] = True
            return True
        else:
            print(f"❌ Only {success_count}/{len(test_clients)} status checks created")
            return False

    def test_get_status_endpoint(self):
        """Test GET /api/status endpoint"""
        print("\n🔍 Testing GET /api/status endpoint...")
        try:
            response = self.session.get(f"{API_BASE_URL}/status")
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    print(f"✅ Retrieved {len(data)} status checks")
                    
                    # Verify our created records are present
                    found_ids = [item.get('id') for item in data if 'id' in item]
                    created_found = sum(1 for created_id in self.created_status_ids if created_id in found_ids)
                    
                    if created_found > 0:
                        print(f"✅ Found {created_found} of our created status checks")
                        self.test_results['get_status'] = True
                        
                        # Display some sample data
                        print("📋 Sample status checks:")
                        for i, status in enumerate(data[-3:]):  # Show last 3
                            print(f"   {i+1}. {status.get('client_name', 'Unknown')} - {status.get('timestamp', 'No timestamp')}")
                        
                        return True
                    else:
                        print("❌ None of our created status checks found in response")
                        return False
                else:
                    print(f"❌ Expected list, got: {type(data)}")
                    return False
            else:
                print(f"❌ Status code: {response.status_code}, Response: {response.text}")
                return False
        except Exception as e:
            print(f"❌ Error testing get status endpoint: {str(e)}")
            return False

    def test_error_handling(self):
        """Test error handling for invalid requests"""
        print("\n🔍 Testing Error Handling...")
        
        # Test POST with missing client_name
        try:
            response = self.session.post(f"{API_BASE_URL}/status", json={})
            if response.status_code in [400, 422]:  # FastAPI returns 422 for validation errors
                print("✅ Properly handles missing client_name")
                self.test_results['error_handling'] = True
            else:
                print(f"❌ Unexpected status code for invalid request: {response.status_code}")
                return False
        except Exception as e:
            print(f"❌ Error testing error handling: {str(e)}")
            return False
        
        # Test invalid endpoint
        try:
            response = self.session.get(f"{API_BASE_URL}/nonexistent")
            if response.status_code == 404:
                print("✅ Properly handles non-existent endpoints")
            else:
                print(f"❌ Unexpected status code for non-existent endpoint: {response.status_code}")
        except Exception as e:
            print(f"❌ Error testing non-existent endpoint: {str(e)}")
        
        return self.test_results['error_handling']

    def run_all_tests(self):
        """Run all backend tests"""
        print("🚀 Starting Backend API Tests")
        print("=" * 60)
        
        # Test in logical order
        if not self.test_connectivity():
            print("\n❌ CRITICAL: Cannot connect to backend. Stopping tests.")
            return False
        
        self.test_hello_endpoint()
        self.test_cors_headers()
        self.test_post_status_endpoint()
        self.test_get_status_endpoint()
        self.test_error_handling()
        
        return self.generate_report()

    def generate_report(self):
        """Generate final test report"""
        print("\n" + "=" * 60)
        print("📊 BACKEND API TEST RESULTS")
        print("=" * 60)
        
        total_tests = len(self.test_results)
        passed_tests = sum(1 for result in self.test_results.values() if result)
        
        for test_name, result in self.test_results.items():
            status = "✅ PASS" if result else "❌ FAIL"
            print(f"{test_name.replace('_', ' ').title():<25} {status}")
        
        print("-" * 60)
        print(f"TOTAL: {passed_tests}/{total_tests} tests passed")
        
        if passed_tests == total_tests:
            print("🎉 ALL BACKEND TESTS PASSED!")
            return True
        else:
            print("⚠️  SOME TESTS FAILED - See details above")
            return False

if __name__ == "__main__":
    tester = BackendTester()
    success = tester.run_all_tests()
    
    if success:
        print("\n✅ Backend API is fully functional")
        sys.exit(0)
    else:
        print("\n❌ Backend API has issues that need attention")
        sys.exit(1)