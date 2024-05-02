# La Cirereta Web App

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation-and-setup)
  - [Project Minimal Starter](#project-minimal-starter)
  - [Deploy on Netlify Setup](#deploy-on-netlify-setup)
  - [Supabase Integration](#supabase-integration)

## Project Overview

**La Cirereta** is an e-commerce platform designed to delight regular individuals looking for exquisite, handcrafted cakes for their special occasions. We understand that every celebration deserves a remarkable cake, and that's where we come in.

# For Those Special Moments

# Who We Serve

At La Cirereta, our primary audience is you – the everyday person with a penchant for life's special moments. Whether it's a birthday, anniversary, wedding, or any other milestone, we're here to make your celebration sweeter and more memorable.

# Our Distinctive Features

What sets La Cirereta apart is our unwavering commitment to quality, proximity, and customization. We don't just bake cakes; we create edible masterpieces. Here's why you'll love us:

- **Quality Ingredients:** We believe that a great cake starts with great ingredients. Every cake we craft is a masterpiece of taste, using only the finest, freshest, and locally sourced ingredients.

- **Close to You:** We're not just an online store; we're your local bakery. We understand the importance of a cake that's not just delicious but also delivered to your doorstep in pristine condition. Our proximity ensures your cake arrives fresh and perfect.

- **Tailored to You:** Your cake is personal, and we treat it that way. La Cirereta offers a unique customization experience. Want a specific flavor, design, or dietary preference? We've got you covered. Your cake, your way.

# Our Goal

Our primary goal at La Cirereta is to provide you with a seamless online storefront for all your cake needs. You can explore our selection, view mouthwatering pictures, and read detailed descriptions to make an informed choice. Celebrate life's moments with the perfect cake.

La Cirereta is where quality, convenience, and customization meet. We look forward to making your celebrations even more extraordinary.

## Tech Stack

The project leverages a cutting-edge tech stack to deliver a seamless and feature-rich experience. Here are the key technologies used:

- **HTML5:** The foundational markup language ensuring a modern and robust app structure.
- **Tailwind CSS:** A powerful styling tool that adds elegance and responsiveness to the app's design, enhancing user experience.
- **Vue and Nuxt 3:** Dynamic JavaScript frameworks that provide flexibility, interactivity, and speed, resulting in a seamless and engaging user interface.
- **Supabase:** As the backend technology, Supabase empowers the app with data management, security, and scalability, ensuring smooth performance and reliable data handling.
- **Netlify:** The chosen deployment platform, known for its efficiency and hassle-free delivery of the app to users.

## Installation & Setup

To get started with the La Cirereta Web App, follow these setup instructions.

### Project Minimal Starter

To install the necessary dependencies, run the following command:

```bash
npm install
```

## Deploy on netlify setup

Update your package.json with the following script for Netlify deployment:

```bash
"scripts": {
  "predeploy": "npm run build"
}
```

Create a netlify.toml file and include the following code:

```bash
[build]
  command = "npm run generate"
  publish = "dist"
```

## Supabase Integration

If your project includes Supabase, make the following configurations:

Update nuxt.config.ts
Add the following code to your nuxt.config.ts file:

```bash
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

Create a .env file with your Supabase information:

```bash
SUPABASE_URL="https://someUrl.supabase.co"
SUPABASE_KEY="someKey"
```

With these steps, you'll be well-prepared to run and deploy the La Cirereta Web App.
