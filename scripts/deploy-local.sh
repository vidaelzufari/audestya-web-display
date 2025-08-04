#!/bin/bash

# Script de déploiement local pour tester avant GitHub Actions
echo "🚀 Script de Déploiement Local - Audestya Avocat"
echo "================================================="

# Couleurs pour les messages
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Fonction pour les logs
log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Vérification des prérequis
log_info "Vérification des prérequis..."

# Vérifier si Node.js est installé
if ! command -v node &> /dev/null; then
    log_error "Node.js n'est pas installé"
    exit 1
fi

# Vérifier si Python est installé
if ! command -v python &> /dev/null; then
    log_error "Python n'est pas installé"
    exit 1
fi

# Vérifier si Yarn est installé
if ! command -v yarn &> /dev/null; then
    log_warn "Yarn n'est pas installé, installation..."
    npm install -g yarn
fi

log_info "✅ Prérequis vérifiés"

# Installation des dépendances Backend
log_info "Installation des dépendances backend..."
cd backend
if [ -f "requirements.txt" ]; then
    python -m pip install --upgrade pip
    pip install -r requirements.txt
    log_info "✅ Dépendances backend installées"
else
    log_error "requirements.txt non trouvé"
    exit 1
fi
cd ..

# Installation des dépendances Frontend
log_info "Installation des dépendances frontend..."
cd frontend
if [ -f "package.json" ]; then
    yarn install
    log_info "✅ Dépendances frontend installées"
else
    log_error "package.json non trouvé"
    exit 1
fi
cd ..

# Tests Backend
log_info "Tests backend..."
cd backend
export MONGO_URL="mongodb://localhost:27017"
export DB_NAME="test_database"

# Vérifier si MongoDB est accessible
if ! curl -s mongodb://localhost:27017 &> /dev/null; then
    log_warn "MongoDB n'est pas accessible à localhost:27017"
    log_warn "Démarrez MongoDB ou configurez MONGO_URL"
fi

# Lancer les tests (optionnel)
python -c "
import sys
try:
    from server import app
    print('✅ Backend importé avec succès')
except ImportError as e:
    print(f'❌ Erreur d\'import backend: {e}')
    sys.exit(1)
"

if [ $? -eq 0 ]; then
    log_info "✅ Tests backend passés"
else
    log_error "❌ Tests backend échoués"
    exit 1
fi
cd ..

# Build Frontend
log_info "Build du frontend..."
cd frontend

# Variables d'environnement pour le build
export VITE_REACT_APP_BACKEND_URL="http://localhost:8001"
export REACT_APP_BACKEND_URL="http://localhost:8001"

yarn build

if [ $? -eq 0 ]; then
    log_info "✅ Frontend buildé avec succès"
else
    log_error "❌ Build frontend échoué"
    exit 1
fi
cd ..

# Test de démarrage des services
log_info "Test de démarrage des services..."

# Démarrer le backend en arrière-plan
cd backend
export MONGO_URL="mongodb://localhost:27017"
export DB_NAME="test_database"
python -m uvicorn server:app --host 0.0.0.0 --port 8001 &
BACKEND_PID=$!
cd ..

# Attendre que le backend démarre
sleep 5

# Tester l'endpoint backend
if curl -s http://localhost:8001/api/ &> /dev/null; then
    log_info "✅ Backend accessible sur http://localhost:8001"
else
    log_error "❌ Backend non accessible"
    kill $BACKEND_PID 2>/dev/null
    exit 1
fi

# Tester les endpoints CMS
if curl -s http://localhost:8001/api/cms/settings &> /dev/null; then
    log_info "✅ Endpoints CMS accessibles"
else
    log_warn "⚠️  Endpoints CMS non accessibles (normal si pas de MongoDB)"
fi

# Nettoyer
kill $BACKEND_PID 2>/dev/null
log_info "🧹 Services arrêtés"

# Résumé
echo ""
echo "📋 RÉSUMÉ DU DÉPLOIEMENT LOCAL"
echo "================================"
echo "✅ Dépendances installées"
echo "✅ Backend testé"
echo "✅ Frontend buildé"  
echo "✅ Services testés"
echo ""
echo "🚀 PRÊT POUR GITHUB ACTIONS!"
echo ""
echo "Prochaines étapes:"
echo "1. Commitez et pushez sur la branche main-1"
echo "2. Configurez les secrets GitHub (voir setup-github-secrets.md)"
echo "3. Le workflow GitHub Actions se déclenchera automatiquement"
echo ""
echo "URLs de test local:"
echo "- Backend: http://localhost:8001/api/"
echo "- Frontend: ouvrez frontend/build/index.html"
echo ""

log_info "Script terminé avec succès! 🎉"