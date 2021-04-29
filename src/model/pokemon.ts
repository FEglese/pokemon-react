class pokemonModel{
  id: number;
  name: string;
  height: number;
  weight: number;
  imageUrl: string;
  moves: any;

  constructor (input: any){
    this.id = input?.id ?? 0;
    this.name = input?.name ?? '';
    this.height = input?.height ?? 0;
    this.weight = input?.weight ?? 0;
    this.imageUrl = input?.sprites?.front_default ?? '';
    
    this.moves = '';
  }
}

export default pokemonModel;
