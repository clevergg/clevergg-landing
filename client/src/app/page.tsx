import {Header} from "../modules/Header/Header";
import {PageHome} from "../modules/Home/PageHome";

export default function Home() {
  return (
    <div className="">
      <div className="flex justify-center">
        <Header/>
      </div>
      <main className="">
        <PageHome/>
      </main>
    </div>
  );
}
  