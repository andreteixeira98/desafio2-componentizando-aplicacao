interface GenreProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }
interface HeaderProps{
    selectedGenre:GenreProps
}

export function Header(props:HeaderProps){
    return (
        <header>
        <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>
      </header>
    )
}