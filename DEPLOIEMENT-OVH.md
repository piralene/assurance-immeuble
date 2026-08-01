# Bascule DNS OVH — assurance-immeuble.fr

## État actuel

- **Site GitHub** : https://github.com/piralene/assurance-immeuble
- **Site Netlify déployé** : https://assurance-immeuble.netlify.app
- **Domaine visé** : assurance-immeuble.fr (actuellement pointé sur l'hébergement OVH cluster014)
- **Custom domain Netlify** : ajouté (`assurance-immeuble.fr` en primary + `www.assurance-immeuble.fr` alias), en attente de vérification DNS

## Attention avant de basculer

**Cette action est visible en production** : dès que les DNS OVH sont modifiés, le site actuel hébergé chez OVH ne sera plus servi. La propagation DNS peut prendre de quelques minutes à 24 h.

Avant de basculer, vérifiez sur `assurance-immeuble.netlify.app` que le nouveau site fonctionne (pages, formulaire de devis, guides du blog).

## Records DNS à modifier sur OVH

Rendez-vous : Manager OVH → Domaine assurance-immeuble.fr → **Zone DNS** → Modifier les entrées.

### 1. Enregistrement A pour l'apex (assurance-immeuble.fr)

Supprimer l'ancien A record qui pointe vers l'hébergement OVH (typiquement une IP OVH commençant par `92.x.x.x` ou similaire), puis créer :

| Type | Sous-domaine | Cible | TTL |
|---|---|---|---|
| A | *(vide)* | `75.2.60.5` | 3600 |

Cette IP est celle du load balancer Netlify. Netlify recommande d'utiliser un ALIAS/ANAME vers `apex-loadbalancer.netlify.com`, mais OVH ne supporte pas ce type sur l'apex. On utilise donc l'IP directe (stable).

### 2. Enregistrement CNAME pour www

Supprimer l'ancien CNAME `www.assurance-immeuble.fr` s'il existe, puis créer :

| Type | Sous-domaine | Cible | TTL |
|---|---|---|---|
| CNAME | `www` | `assurance-immeuble.netlify.app.` | 3600 |

(Ne pas oublier le point final après `netlify.app` — OVH l'ajoute parfois automatiquement.)

### 3. Enregistrement MX (email) : NE PAS TOUCHER

Laisser les enregistrements MX en place pour ne pas casser les emails professionnels associés au domaine.

## Vérification post-bascule

Après modification :

1. Attendez 10 à 30 minutes.
2. Vérifiez la propagation avec https://dnschecker.org/?domain=assurance-immeuble.fr
3. Revenez sur Netlify → Domain management. Les statuts "Pending DNS verification" doivent passer au vert.
4. Netlify provisionne automatiquement un certificat SSL Let's Encrypt (compter jusqu'à 24 h après la propagation).
5. Testez https://assurance-immeuble.fr et https://www.assurance-immeuble.fr

## En cas de problème

- **Site Netlify inaccessible** : le sous-domaine `assurance-immeuble.netlify.app` reste toujours actif. Vérifiez d'abord qu'il fonctionne.
- **Certificat SSL en erreur** : Netlify Domain management → "Renew certificate" (peut nécessiter plusieurs tentatives dans les 24 h suivant la propagation).
- **Cache navigateur** : videz le cache local et testez en navigation privée.

## Rollback

Pour revenir à l'ancien hébergement OVH :

1. Retour dans la zone DNS OVH.
2. Restaurer l'ancien A record apex (IP de l'hébergement OVH `assurancppf.cluster014.ovh.net`).
3. Restaurer l'ancien CNAME `www` (vers `assurancppf.cluster014.ovh.net.` si applicable).
4. Attendre la propagation.

Les fichiers du site OVH cluster014 restent intacts, seule la résolution DNS bascule.
