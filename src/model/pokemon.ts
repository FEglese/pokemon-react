interface pokemon {
	idz: number;
	name: string;
	height: number;
	weight: number;
	sprites: spriteType;
	moves: any;
}

interface spriteType {
	front_default: string;
}

export default pokemon;
