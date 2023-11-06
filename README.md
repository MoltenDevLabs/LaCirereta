## Project Title:

Selecta Cakes

## Project Description:

This project is a web app built like a bakery e-commerce focused on cakes.
It offers the functionality of a full built e-commerce.

## Tech Stack:

This project makes use of:

- HTML5 as the markup language
- Tailwind as the styling tool
- Vue and Nuxt 3 as the Javascript framework
- Supabase as the backend
- Netlify for deploying

## Installation & Setup:

# Project minimal starter

# npm

npm install

# .env

Create a .env file with Supabase info:
SUPABASE_URL= "https://someUrl.supabase.co"
SUPABASE_KEY= "someKey"

---

## Deploy on netlify setup

# package.json

"scripts": {
"predeploy": "npm run build"
}

# netlify.toml

Create a netlify.toml file and include the code below

[build]
command = "npm run generate"
publish = "dist"

---

## If there's supabase in the project

# nuxt.config.ts

Add the following code to the nuxt.config.ts file

supabase: {
redirect: false,
url: process.env.SUPABASE_URL,
key: process.env.SUPABASE_KEY,
},
runtimeConfig: {
public: {
supabaseUrl: process.env.SUPABASE_URL,
},
private: {
supabaseKey: process.env.SUPABASE_KEY,
},
}

```

```
