---
title: Built-in automatic image optimization in Next.js
description: Image Component in Next.js.
date: 2020-12-26
category: 'next'
draft: false
---

![Image-Component Cover](./assets/image-component.png)

Next.js has introduced Automatic Image Optimization in versions 10.0.0 and above, using a built-in Image Component. It is an extension of the HTML <img> element, evolved for the modern web.

## The Major Concern

Images make up one of the largest elements to be loaded on a page. Thus, we need to have a way to optimize image for better Web Vital scores.

Unoptimized images can take a toll on significant Web Vitals such as Largest Contentful Paint or LCP.

> Largest Contentful Paint (LCP) is a Core Web Vitals metric and measures when the largest content element in the viewport becomes visible. It can be used to determine when the main content of the page has finished rendering on the screen.

There can be significant negative impact on a webpage if images are not optimized. Therefore, ensuring images are compressed to it's adequate size and in formats such as WebP, JPEG, and PNG is a big deal.

## Some Features of Image Component

- The major talking point of the Image Component is that it avoids shipping large images to devices with a smaller viewport (where the larger images might take more time to load).

<br>

- Automatic Image Optimization works with multiple sources. The image doesn't have to be a local asset, instead, can be pulled from an external data source in real-time, like a CMS. How?

<br>

- The Image Component doesn't optimize image during build time. Instead, it optimizes images real time or when in demand. Optimizing images during build time can increase the build time drastically and hence Next.js avoids that.

<br>

- Lazy loading is achieved. Lazy Loading simply means that only the images that are in the viewport will be loaded. Subsequent images load as they are scrolled into viewport.

<br>

- Images are always rendered in such a way as to avoid Cumulative Layout Shift, a Core Web Vital that Google is going to use in search ranking.

<br>

- Cumulative Layout Shift are often caused when visible elements are forced to move because another element was suddenly added to the page or resized.

## The Image Component improves application performance

The Image Component in Next.js helps us to follow best practices to optimize images. It also uses srcsets, preloads and custom sized image assets. Following the best practices enables an application to improve metrics such as LCP and CLS.

The Image Component with it's simple and intuitive API will bring out great developer experience in implementing them into new applications, or even into existing applications.

## The Image Component

Adding the Image Component to your application is as simple as importing the `next/image` component like so:

```javascript {1}
import Image from 'next/image'

function Cats() {
  return (
    <>
      <h1>Cats Page</h1>
      <Image src="/cat.png" alt="Picture of a cat" width={300} height={300} />
      <p>Welcome to the cat's page!</p>
    </>
  )
}

export default Cats
```

### Some Required Props

`1. src`

Src is the path or URL to the source image. When using an external URL or when pulling out image from external source, you must add it to domains in next.config.js like so:

```javascript
module.exports = {
  images: {
    domains: ['example.com'],
  },
}
```

This enables us to optimize images hosted on an external website, using an absolute url for the Image src.

`2. width`

The width of the image, in pixels.

> Required unless layout="fill".

`3. height`

The height of the image, in pixels.

> Required unless layout="fill"`.

## Some Optional Props

The following Image Component props are optional:

#### 1. layout

The layout property of an image is used to react to changes in the viewport size. Listed below are the layout properties we have in Next.js Image Component.

- **_Fixed_** : with fixed layout, the image dimensions are constant as the viewport changes (no responsivenes).

<br>

- **_Intrinsic_** : The intrinsic layout is quite different. The image will only scale it's dimensions down for smaller viewports but the same image will maintain it's original dimensions for larger viewports.

<br>

- **_Responsive_** : With the responsive property, the image will scale it's dimensions to fit the viewport. The images will be scaled down for smaller viewports (such as mobile, phablets) and scaled up for larger viewports (such as desktop, laptops).

<br>

- **_Fill_** : With the fill property, the image will stretch to the dimensions of the parent element.

#### 2. Quality

Quality prop refers to the quality of the optimized image to be displayed. It is an integer value between 1 to 100. 100 is the best quality while 0 being the worst. The default value is 75.

#### 3. Priority

Priority is a boolean value. If true, the image will be considered as high priority and will be preloaded. If false, the image will have a default priority.

## Caching in Image Component

Images are optimized dynamically upon on-demand request and stored in the `<distDir>/cache/images` directory. Until expiration, the optimized image file will be served for subsequent requests.

When a request is made that matches a cached but expired file, the cached file is deleted before generating a new optimized image and caching the new file.

The expiration is defined by the upstream server's Cache-Control header.

You can configure deviceSizes and imageSizes to reduce the total number of possible generated images.

## Device Variants

Next.js Image Components helps us set breakpoints of the expected device widths of a website. It uses the deviceSizes property to set the width breakpoints.

> Note: These breakpoints are applicable when the next/image component uses the responsive or fill layout.

```javascript
// Default Config
module.exports = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
}
```

## Image Sizes

We can also specify different image widths using the imageSizes property.

> Note: These widths are used when the next/image component uses fixed or intrinsic layout.

```javascript
// Default Config
module.exports = {
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}
```

## Resources and References

- [Image Optimization - Next.js](https://nextjs.org/docs/basic-features/image-optimization)
- [Image Component - Next.js](https://nextjs.org/docs/api-reference/next/image)
- [Checkout the Image Component on Github](https://github.com/vercel/next.js/tree/canary/examples/image-component)
- [Web Vitals](https://web.dev/optimize-lcp/)