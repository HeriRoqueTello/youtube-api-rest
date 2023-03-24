import useDarkMode from "../hooks/useDarkMode"
import { AiOutlineMenu } from "react-icons/ai";
import { RiVideoAddLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { CgSun, CgMoon } from "react-icons/cg";

export default function Navbar() {

  const [darkMode, toggleDarkMode] = useDarkMode()

  return (
    <nav className='flex flex-row items-center justify-between h-16 px-6'>
      <div className="flex flex-row items-center justify-between">
          <AiOutlineMenu className="text-[#E8E8E8] h-5 w-5"/>
          <div>
            {
              darkMode ? (
                <img className="text-white h-32 w-32" src="/youtube-dark.svg" alt="Logo Youtube" />
                ) : (
                <img className="text-white h-28 w-28" src="/youtube.svg" alt="Logo Youtube" />
              )
            }
          </div>
      </div>
      <div class="relative hidden sm:block">
        <label class="sr-only" for="search"> Search </label>

        <input
          class="h-10 w-full rounded-lg text-[#E8E8E8] border-[#222222] border border-solid bg-white dark:bg-[#121212] pl-4 pr-10 text-sm shadow-sm sm:w-[34rem]"
          id="search"
          type="search"
          placeholder="Buscar..."
        />

        <button
          type="button"
          class="absolute top-1/2 right-1 -translate-y-1/2 rounded-md bg-[#222222] p-2 text-[#E8E8E8] transition"
        >
          <span class="sr-only">Search</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-row justify-between space-x-4">
        <RiVideoAddLine className="text-[#E8E8E8] h-5 w-5" />
        <BsBell className="text-[#E8E8E8] h-5 w-5" />
      </div>
      {/* <button onClick={toggleDarkMode}>
        {darkMode ? 'Desactivar modo oscuro' : 'Activar modo oscuro'}
      </button> */}
    </nav>
  )
}
