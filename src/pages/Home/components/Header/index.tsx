import Nav from './components/Nav';
import EMBALAGEM from '@/assets/embalagem.png';
import { useDeviceType } from '@/hook/useDeviceType';
import { ArrowRight } from 'lucide-react';

export default function Header() {
  const isMobile = useDeviceType();

  if (isMobile) {
    return (
      <div className="grid grid-rows-[auto,1fr] h-screen bg-default-500">
        <Nav />
        <div className="grid grid-rows-[30%,70%]">
          <div className="relative bg-gradient-to-r from-default-400 to-default-500">
            <div className="flex flex-col items-center justify-center h-full gap-2 bg-top bg-cover text-default-100 bg-header-texture">
              <h1 className="text-2xl font-bold">Bem vindo!</h1>
              <p className="text-base text-center">
                Somos perfeitos para quem busca sabor e bem-estar em cada
                mordida.
              </p>
            </div>
          </div>
          <img
            src={EMBALAGEM}
            alt="Imagem da embalagem do produto"
            className="object-cover w-full h-full opacity-50"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen bg-gradient-to-r from-default-400 to-default-500">
      <div className="absolute top-0 flex items-center justify-between w-full h-12 px-4">
        <span className="font-bold text-default-100">LOGO</span>
        <Nav />
      </div>
      <main className="grid grid-cols-[40%,50%] w-full h-full bg-top bg-cover bg-header-texture bg-opacity-15">
        <section className="flex flex-col justify-between p-3 py-12 mt-12 ml-4 text-white">
          <div className="flex flex-col gap-2 ">
            <h1 className="text-2xl font-bold">Bem vindo!</h1>
            <p className="text-3xl">
              Somos perfeitos para quem busca sabor e bem-estar em cada mordida.
            </p>
          </div>
          <button
            className="flex items-center gap-3 px-3 py-2 transition-all border rounded border-default-100 w-fit hover:bg-default-100 hover:text-default-500"
            aria-label="Saiba mais sobre nossos produtos"
          >
            Saiba mais <ArrowRight />
          </button>
        </section>
        <img
          src={EMBALAGEM}
          alt="Imagem da embalagem do produto"
          className="absolute top-0 right-0 object-cover h-screen"
        />
      </main>
    </div>
  );
}
