# Image Assets Organization

This directory is configured for all static portfolio images. Files placed in the `public` directory can be referenced directly in code starting with `/images/...`.

---

## 📁 Directory Structure

```text
public/
└── images/
    ├── profile/     <-- Put your avatars, headshots, or portrait photos here
    └── projects/    <-- Put your project mockups, thumbnails, and screenshots here
```

---

## 💡 How to Reference in Code

### 1. Project Images
Save your image in `public/images/projects/my-project.png`, then in [projects.ts](file:///c:/Users/Windows%2010/Downloads/SIA-Portfolio/src/data/projects.ts), reference it as:
```ts
image: "/images/projects/my-project.png"
```

### 2. Profile Images
Save your photo in `public/images/profile/avatar.jpg`, then in your component or page:
```tsx
import Image from "next/image";

<Image
  src="/images/profile/avatar.jpg"
  alt="Profile Photo"
  width={400}
  height={400}
  className="rounded-full object-cover"
/>
```

---

## 🎯 Recommended Image Formats & Dimensions
* **Format**: `.webp` (recommended for fastest load times) or `.png` / `.jpg`.
* **Projects Thumbnail**: ~1200 × 800 px (16:10 or 3:2 ratio).
* **Profile / Avatar**: ~500 × 500 px (1:1 square ratio).
