# Configuration Formspree pour Audestya Avocat

## Étapes de configuration :

### 1. Connexion à Formspree
- Allez sur https://formspree.io/login
- Connectez-vous avec : haia.elzufari@outlook.com
- Mot de passe : Lavieestunefete2025*

### 2. Créer un nouveau formulaire
1. Cliquez sur "New Form"
2. Nom du formulaire : "Contact Audestya Avocat"
3. Email de destination : haia.elzufari@outlook.com
4. Cliquez sur "Create Form"

### 3. Récupérer l'ID du formulaire
- Une fois le formulaire créé, vous verrez un ID comme : `xyzabc123`
- Copiez cet ID

### 4. Configurer le code
- Dans le fichier `src/components/ContactSection.tsx`
- Ligne 8 : Remplacez `"YOUR_FORM_ID"` par votre ID réel
- Exemple : `const [state, handleSubmit] = useForm("xyzabc123");`

### 5. Configuration recommandée
- **Notifications par email** : Activées
- **Spam protection** : Activée
- **CAPTCHA** : Optionnel (recommandé pour éviter le spam)

### 6. Test
- Une fois configuré, testez le formulaire sur votre site
- Vous devriez recevoir les messages sur haia.elzufari@outlook.com

## Sécurité
⚠️ Changez votre mot de passe après cette configuration pour des raisons de sécurité.