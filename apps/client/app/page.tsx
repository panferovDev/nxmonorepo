import style from './page.module.scss';

export default async function Index(): Promise<JSX.Element> {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={style.page}>
      <h1>Hello app</h1>
    </div>
  );
}
