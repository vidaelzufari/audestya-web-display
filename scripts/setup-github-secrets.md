# Configuration des Secrets GitHub pour le Déploiement

## 📋 Secrets Requis dans GitHub

Allez dans votre repository GitHub → Settings → Secrets and variables → Actions → New repository secret

### 🔒 Secrets Généraux

```bash
# URLs de production
BACKEND_URL=https://votre-backend.onrender.com  # ou railway.app
FRONTEND_URL=https://votre-site.vercel.app      # ou render.com
PRODUCTION_URL=https://votre-site.vercel.app

# Base de données
MONGO_URL=mongodb://username:password@host:port/database
DB_NAME=audestya_production
```

### 🚀 Secrets Vercel (si utilisé)

```bash
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_org_id  
VERCEL_PROJECT_ID=your_project_id
```

**Comment obtenir les tokens Vercel :**
1. Allez sur https://vercel.com/account/tokens
2. Créez un nouveau token
3. Pour ORG_ID et PROJECT_ID : `vercel --cwd frontend` dans votre projet

### 🚂 Secrets Railway (si utilisé)

```bash
RAILWAY_TOKEN=your_railway_token
```

**Comment obtenir le token Railway :**
1. Installez Railway CLI : `npm install -g @railway/cli`
2. Login : `railway login`
3. Générez token : `railway token`

### 🎨 Secrets Render (si utilisé)

```bash
RENDER_API_KEY=your_render_api_key
RENDER_BACKEND_DEPLOY_HOOK=https://api.render.com/deploy/srv-xxx
RENDER_FRONTEND_DEPLOY_HOOK=https://api.render.com/deploy/srv-yyy
```

**Comment obtenir les Deploy Hooks Render :**
1. Dashboard Render → Service → Settings → Deploy Hook
2. Copiez l'URL généré

### 🔐 Secrets MongoDB

```bash
# Si MongoDB hébergé séparément
MONGO_USERNAME=your_mongo_user
MONGO_PASSWORD=your_mongo_password
MONGO_HOST=your_mongo_host
MONGO_PORT=27017
```

## ⚙️ Variables d'Environnement par Plateforme

### Vercel Environment Variables
```bash
VITE_REACT_APP_BACKEND_URL=https://votre-backend.railway.app
REACT_APP_BACKEND_URL=https://votre-backend.railway.app
```

### Railway Environment Variables
```bash
MONGO_URL=mongodb://localhost:27017
DB_NAME=audestya_production
PORT=8001
```

### Render Environment Variables
```bash
# Backend
MONGO_URL=mongodb://username:password@host:port/database
DB_NAME=audestya_production

# Frontend
VITE_REACT_APP_BACKEND_URL=https://votre-backend.onrender.com
REACT_APP_BACKEND_URL=https://votre-backend.onrender.com
```

## 🛠️ Commands Utiles

### Test des secrets localement
```bash
# Test backend
cd backend
MONGO_URL="your_mongo_url" DB_NAME="test_db" python -m uvicorn server:app --reload

# Test frontend  
cd frontend
VITE_REACT_APP_BACKEND_URL="http://localhost:8001" yarn dev
```

### Vérification des variables
```bash
# Dans GitHub Actions
echo "Backend URL: ${{ secrets.BACKEND_URL }}"
echo "Frontend URL: ${{ secrets.FRONTEND_URL }}"
```

## 🚨 Sécurité

- ❌ Ne jamais commit des secrets dans le code
- ✅ Utilisez toujours les GitHub Secrets
- ✅ Limitez les permissions des tokens
- ✅ Changez régulièrement les tokens
- ✅ Utilisez des environnements séparés (staging/production)

## ✅ Checklist Setup

- [ ] Repository GitHub créé et configuré
- [ ] Branch main-1 configurée comme branche principale
- [ ] Tous les secrets ajoutés dans GitHub
- [ ] Plateforme de déploiement choisie (Vercel/Railway/Render)
- [ ] Comptes créés sur les plateformes nécessaires
- [ ] Configuration files ajoutés au repository
- [ ] Premier push sur main-1 effectué
- [ ] Workflow GitHub Actions déclenché
- [ ] Tests de santé passés
- [ ] URLs de production accessibles

## 📞 Aide

Si vous avez des questions sur la configuration :
1. Vérifiez les logs GitHub Actions
2. Testez localement d'abord
3. Vérifiez que tous les secrets sont correctement configurés
4. Assurez-vous que les URLs sont accessibles