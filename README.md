# Link Sharing App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Technologies Used

- **Next.js**: A React framework for building server-side rendered and statically generated web applications.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Zustand**: A small, fast, and scalable state-management solution.
- **ESLint**: A tool for identifying and fixing problems in JavaScript code.
- **Prettier**: An opinionated code formatter.
- **Radix UI**: A set of low-level, accessible UI components for building design systems.
- **React Beautiful DnD**: A drag-and-drop library for React.

## Instructions to Run the Project Locally

1. **Clone the repository**:
    ```bash
    git clone https://github.com/AmanDubeyCS/link-sharing-app.git
    cd link-sharing-app
    ```

2. **Install dependencies**:
    ```bash
    npm install --legacy-peer-deps
    # or
    yarn install --legacy-peer-deps
    # or
    pnpm install --legacy-peer-deps
    # or
    bun install --legacy-peer-deps
    ```

3. **Run the development server**:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

4. **Open the application**:
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

5. **Start editing**:
    You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Assumptions and Decisions Made During Development

- **Font Integration**: The project uses the Instrument Sans font family, which is integrated using the `next/font/local` module. The fonts are stored locally in the `app/fonts` directory and are loaded in the `app/layout.tsx` file.
    ```typescript:app/layout.tsx
    startLine: 1
    endLine: 20
    ```

- **State Management**: Zustand is used for state management to handle the list of links. The state is defined in `store/listdataStore.tsx`.
    ```typescript:store/listdataStore.tsx
    startLine: 1
    endLine: 17
    ```

- **Drag and Drop**: The `react-beautiful-dnd` library is used to implement drag-and-drop functionality for reordering links. This is implemented in the `components/addLinks/DnDContainer.tsx` file.
    ```typescript:components/addLinks/DnDContainer.tsx
    startLine: 1
    endLine: 146
    ```

- **Form Validation**: Links are validated to ensure they start with the correct platform URL prefix. This validation logic is implemented in the `components/addLinks/LinksAddContainer.tsx` file.
    ```typescript:components/addLinks/LinksAddContainer.tsx
    startLine: 1
    endLine: 94
    ```

- **Styling**: Tailwind CSS is used for styling the application. Custom styles and utility classes are defined in the `app/globals.css` file.
    ```css:app/globals.css
    startLine: 1
    endLine: 31
    ```

- **Linting and Formatting**: ESLint and Prettier are configured to ensure code quality and consistency. The configuration files are `.eslintrc.json` and `.prettierrc`.
    ```json:.eslintrc.json
    startLine: 1
    endLine: 42
    ```
    ```json:.prettierrc
    startLine: 1
    endLine: 32
    ```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
