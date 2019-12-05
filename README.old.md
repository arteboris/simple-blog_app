# simple-blog_app

## Functional Requirements
- The blog should have Latest Posts page (`/` route)
- The blog should have Post page (`/posts/:postId` route)
- The blog should have Create Post page (`/posts/new` route)
- User should be able to create a new post

## Technical Requirements
- Code should be written with TypeScript
- [ESLint and Prettier](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb) setup for code linting
- We want to support SSR in our application. As the most simple solution, use [Next.js](https://nextjs.org/) because it supports SSR out of the box
- User interface should be built with [styled-components](https://www.styled-components.com/)
- Make sure to use React hooks everywhere instead of class-based components
- Redux as data layer with any middlewares set you to prefer
- The project should have clear README with steps to run it
- Network request handled with [axios](https://github.com/axios/axios)
- Use functional programming if you are know-how. [Ramda.js](http://ramdajs.com/) or [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide) is plus to your score
- Deploy the app to any free hosting for review. This item is optional, but nice to have :)

## API
To persist data and work with real API, we're going to use simple Node.js API created in a few minutes. API hosted in the cloud and you can query it from anywhere. API endpoints documentation: https://documenter.getpostman.com/view/1917440/RzteTChV
