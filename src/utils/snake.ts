type NameProperties = {
	name: string;
} | {
	names: string[];
};

type ImageSizes = {
	[key: `${string}x`]: string;
	full: string;
};

type ImageProperties = {
	image: string;
} | {
	images: ImageSizes;
};

type BaseProperties = {
	snakeNumber: number;
};

export type Snake = NameProperties & ImageProperties & BaseProperties;
