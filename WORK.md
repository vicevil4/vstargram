# vstagram

Learning by making a clone of Instagram.

## Pre-requirement

- [`bun`](https://bun.sh/docs/installation)

## Setup

### create next-app

```shell
bun create next-app .
```

### add Auth.js

```shell
bun add next-auth@beta
npx auth secret
```

- Google Cloud Console : [vstargram](https://console.cloud.google.com/welcome/new?inv=1&invt=Abn4Rw&project=vstargram)

### add Lucide icon

```shell
bun add lucide-react
```

### add react-masonry-css

```shell
bun add react-masonry-css
```

### add radix-ui

```shell
bun add @radix-ui/themes
```

### add prisma & mongodb

```shell
bun add prisma
npx prisma init
bun add @prisma/client
bun add dotenv-cli

# generate prisma schema model for typescript
npx prisma generate
npx prisma db push
```

### add pinata

```shell
bun add pinata
```

### add preloaders/spinners

```shell
# https://www.npmjs.com/package/react-preloaders
bun add react-preloaders
# https://www.npmjs.com/package/react-spinners
bun add react-spinners
```

### add types

```shell
bun add @types/lodash
```

## Run

```shell
bun dev
```

## References

- <https://www.youtube.com/watch?v=D6tryXaC950>
- [Auth.js](https://authjs.dev/)
- [Google Cloud Console](https://console.cloud.google.com/)
- [lucide.dev](https://lucide.dev/)
- [unsplash](https://unsplash.com/ko)
- [picsum](https://picsum.photos/)
- [Radix UI](https://www.radix-ui.com/)
- [Prisma](https://www.prisma.io/)
- [MongoDB](https://www.mongodb.com/ko-kr)
- [Pinata.cloud](https://pinata.cloud/)
