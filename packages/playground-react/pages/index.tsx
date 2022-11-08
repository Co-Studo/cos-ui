import { Text } from '@cos-ui/react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Link from 'next/link';
import { css } from 'styled-components';

import colors from '@styles/colors';
import { ExamplesType, resolveAllExamples } from '@utils/resolve-all-examples';

type ExampleProps = {
  examples: ExamplesType[];
};

export const Examples = ({ examples }: ExampleProps) => (
  <ul
    css={{
      margin: '1rem 2rem',
    }}
  >
    {examples.map((example) => (
      <li
        key={example.path}
        css={css`
          list-style: disc;

          &::marker {
            color: ${colors.grey200};
          }
        `}
      >
        {example.children ? (
          <Text variant="articleTitle">{example.name}</Text>
        ) : (
          <Link href={example.path}>
            <Text sx={{ textDecoration: 'underline' }}>{example.name}</Text>
          </Link>
        )}
        {example.children && <Examples examples={example.children} />}
      </li>
    ))}
  </ul>
);

export const getStaticProps: GetStaticProps<{
  examples: false | ExamplesType[];
}> = async () => ({
  props: {
    examples: await resolveAllExamples('pages'),
  },
});

const IndexPage = ({
  examples,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (examples === false) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      <Head>
        <title>Playground React</title>
      </Head>
      <Text variant="sectionTitle" as="h2">
        Playground React
      </Text>
      <Examples examples={examples} />
    </div>
  );
};

export default IndexPage;
