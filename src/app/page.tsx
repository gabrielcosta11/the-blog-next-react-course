import clsx from "clsx";
import { SpinLoader } from "../components/SpinLoader";
import { Suspense } from "react";
import PostsList from "../components/PostsList";
import Container from "../components/Container";

export default async function Home() {

  return (
    <>
      <Container>
        <header>
          <h1 className={clsx('text-6xl', 'font-bold', 'text-center', 'py-8')}>Cabeçalho</h1>

          <p className={clsx('text-justify', 'py')}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam fugit ea, ducimus, debitis iure voluptatum quos ex esse illum consequuntur in rerum accusamus quaerat ipsum, deleniti modi. Quibusdam, similique mollitia!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam fugit ea, ducimus, debitis iure voluptatum quos ex esse illum consequuntur in rerum accusamus quaerat ipsum, deleniti modi. Quibusdam, similique mollitia!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam fugit ea, ducimus, debitis iure voluptatum quos ex esse illum consequuntur in rerum accusamus quaerat ipsum, deleniti modi. Quibusdam, similique mollitia!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam fugit ea, ducimus, debitis iure voluptatum quos ex esse illum consequuntur in rerum accusamus quaerat ipsum, deleniti modi. Quibusdam, similique mollitia!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam fugit ea, ducimus, debitis iure voluptatum quos ex esse illum consequuntur in rerum accusamus quaerat ipsum, deleniti modi. Quibusdam, similique mollitia!
          </p>

        </header>

        <Suspense fallback={<SpinLoader />}>
          <PostsList />
        </Suspense>

        <footer>
          <p className={clsx('text-6xl', 'font-bold', 'text-center', 'py-8')}>Rodapé</p>
        </footer>
      </Container>
    </>
  );
}
