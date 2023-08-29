import Image from "next/image"

export const NoFavorites = () => {
  return (
    <div className="container flex flex-col items-center justify-center self-center" style={{ height: 'calc(100vh - 100px)'}}>
      <h1 className="pb-20" style={{fontSize: '40px'}}>
        No hay favoritos
      </h1>

      <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg" 
        width={250}
        height={250}
        alt="No hay favoritos"
        style={{opacity: 0.1}}
      />
    </div>
  )
}
