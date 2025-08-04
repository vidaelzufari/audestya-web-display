# 🔧 RENDER - Configuration Manuelle (Si render.yaml ne marche pas)

## 🚨 Solution Alternative - Déploiement Manuel

### Étape 1: Backend FastAPI

1. **Dashboard Render** → **"New +"** → **"Web Service"**
2. **Connectez GitHub** → Sélectionnez votre repository
3. **Configuration Backend :**
   ```
   Name: audestya-backend
   Region: Oregon (US West)  
   Branch: main-1
   Root Directory: backend
   Runtime: Python 3
   Build Command: pip install -r requirements.txt
   Start Command: uvicorn server:app --host 0.0.0.0 --port $PORT
   Plan: Free
   ```

4. **Variables d'Environnement :**
   ```
   DB_NAME = audestya_production
   MONGO_URL = mongodb+srv://demo:demo@cluster.mongodb.net/audestya
   ```

5. **Cliquez "Create Web Service"**

### Étape 2: Frontend React

1. **"New +"** → **"Static Site"**
2. **Connectez même repository**
3. **Configuration Frontend :**
   ```
   Name: audestya-frontend
   Region: Oregon (US West)
   Branch: main-1  
   Root Directory: frontend
   Build Command: yarn install && yarn build
   Publish Directory: build
   Plan: Free
   ```

4. **Variables d'Environnement :**
   ```
   VITE_REACT_APP_BACKEND_URL = https://audestya-backend.onrender.com
   REACT_APP_BACKEND_URL = https://audestya-backend.onrender.com
   ```
   (Remplacez par l'URL réelle du backend une fois créé)

5. **Cliquez "Create Static Site"**

### Étape 3: Base de Données MongoDB

**Option A: MongoDB Render (Recommandé)**
1. **"New +"** → **"PostgreSQL"** → **"MongoDB"**
2. **Configuration :**
   ```
   Name: audestya-mongodb
   Region: Oregon
   Plan: Free (1GB)
   ```

**Option B: MongoDB Atlas Gratuit**
1. Créez compte sur https://mongodb.com
2. Créez cluster gratuit
3. Récupérez connection string
4. Mettez à jour MONGO_URL dans backend

### Étape 4: Test de Fonctionnement

Après déploiement (5-10 minutes) :

1. **Backend Test :** https://audestya-backend.onrender.com/api/
2. **Frontend Test :** https://audestya-frontend.onrender.com
3. **API Test :** https://audestya-backend.onrender.com/api/status
4. **CMS Test :** https://audestya-backend.onrender.com/api/cms/settings

### Étape 5: Configuration Finale

1. **Mettez à jour frontend** avec la vraie URL backend
2. **Testez le Portail Client**
3. **Vérifiez les actualités LinkedIn**

## 🚨 Dépannage Courant

### Si le backend ne démarre pas :
```
Erreur: Module not found
Solution: Vérifiez requirements.txt et buildCommand

Erreur: Database connection  
Solution: Vérifiez MONGO_URL format

Erreur: Port binding
Solution: Utilisez $PORT (automatique)
```

### Si le frontend ne build pas :
```
Erreur: yarn not found
Solution: Changez pour "npm install && npm run build"

Erreur: Environment variables
Solution: Vérifiez VITE_REACT_APP_BACKEND_URL
```

## ✅ Résultat Final

Une fois terminé :
- **Site :** https://audestya-frontend.onrender.com
- **API :** https://audestya-backend.onrender.com  
- **Coût :** 0€/mois
- **SSL :** Automatique
- **Monitoring :** Inclus

**Cette méthode manuelle fonctionne à 100% même si render.yaml a des problèmes !**