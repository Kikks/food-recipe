export type Data = {
	image: string;
	title: string;
	description: string;
	prepTime: string;
	exp: number;
	skill: string;
	cousine: string;
	type: string;
};

export const detailsList = ["prepTime", "exp", "skill", "cousine", "type"];

export const iconsByType: {
	[key: string]: string;
} = {
	prepTime: "fire",
	exp: "badge",
	skill: "energy",
	cousine: "chemistry",
	type: "drop"
};

export default [
	{
		image:
			"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1273477_8-ad36e3b.jpg?quality=90&webp=true&resize=440,400",
		title: "Easy pancakes",
		description:
			"Learn a skill for life with our foolproof crêpe recipe that ensures perfect pancakes every time – elaborate flip optional",
		prepTime: "10 mins",
		exp: 10,
		skill: "easy",
		cousine: "Vegan",
		type: "dehydrated"
	},
	{
		image:
			"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-901451_9-687c42b.jpg?quality=90&webp=true&resize=440,400",
		title: "Best Yorkshire puddings",
		description:
			"The secret to getting gloriously puffed-up Yorkshire puddings is to have the fat sizzling hot and don't open the oven door!",
		prepTime: "5 mins",
		exp: 20,
		skill: "easy",
		cousine: "Vegan",
		type: "dehydrated"
	},
	{
		image:
			"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001451_6-c8d72b8.jpg?quality=90&webp=true&resize=440,400",
		title: "Chilli con carne recipe",
		description:
			"This great chilli recipe has to be one of the best dishes to serve to friends for a casual get-together. An easy sharing favourite that uses up storecupboard ingredients.",
		prepTime: "10 mins",
		exp: 60,
		skill: "easy",
		cousine: "Nouvelle",
		type: "dehydrated"
	},
	{
		image:
			"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1273522_8-e131986.jpg?quality=90&webp=true&resize=440,400",
		title: "Banana Bread",
		description:
			"A cross between banana bread and a drizzle cake, this easy banana loaf recipe is a quick bake that can be frozen. It's great for using up overripe bananas, too.",
		prepTime: "15 mins",
		exp: 10,
		skill: "easy",
		cousine: "Vegetarian",
		type: "fast food"
	},
	{
		image:
			"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/the-best-spaghetti-bolognese-7e83155.jpg?quality=90&webp=true&resize=440,400",
		title: "The best spaghetti bolognese recipe",
		description:
			"Our best ever spaghetti bolognese is super easy and a true Italian classic with a meaty, chilli sauce. This recipe comes courtesy of BBC Good Food user Andrew Balmer",
		prepTime: "25 mins",
		exp: 90,
		skill: "easy",
		cousine: "Vegan",
		type: "healthy"
	},
	{
		image:
			"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001464_11-ed687dd.jpg?quality=90&webp=true&resize=440,400",
		title: "Best ever chocolate brownies recipe",
		description:
			"A foolproof brownie recipe for a squidgy chocolate bake. Watch our recipe video to help you get a perfect traybake every time.",
		prepTime: "25 mins",
		exp: 70,
		skill: "easy",
		cousine: "Nouvelle",
		type: "fast food"
	},
	{
		image:
			"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/roast-potatoes-main-7b0e23a.jpg?quality=90&webp=true&resize=440,400",
		title: "Ultimate roast potatoes",
		description:
			"This foolproof recipe will ensure even first timers get crispy skins and fluffy insides. Make sure your roast potatoes are perfect for Sunday lunch or even Christmas dinner",
		prepTime: "20 mins",
		exp: 10,
		skill: "medium",
		cousine: "Vegan",
		type: "dehydrated"
	},
	{
		image:
			"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-736458_11-5ff6be2.jpg?quality=90&webp=true&resize=440,400",
		title: "Toad-in-the-hole",
		description:
			"Serve this comforting classic made with chipolata sausages and a simple batter – it’s easy enough that kids can help make it.",
		prepTime: "15 mins",
		exp: 25,
		skill: "easy",
		cousine: "Vegan",
		type: "dehydrated"
	},
	{
		image:
			"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001500_10-16f94ee.jpg?quality=90&webp=true&resize=440,400",
		title: "Classic scones with jam & clotted cream",
		description:
			"You can have a batch of scones on the table in 20 minutes with Jane Hornby's storecupboard recipe, perfect for unexpected guests",
		prepTime: "5 mins",
		exp: 30,
		skill: "easy",
		cousine: "Vegan",
		type: "dehydrated"
	},
	{
		image:
			"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001468_10-81b47f5.jpg?quality=90&webp=true&resize=440,400",
		title: "Classic Victoria sandwich recipe",
		description:
			"The perfect party cake, a Victoria sponge is a traditional bake everyone will love. Makes an easy wedding cake, too",
		prepTime: "40 mins",
		exp: 10,
		skill: "easy",
		cousine: "Vegan",
		type: "fast food"
	},
	{
		image:
			"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-196602_11-01e6eea.jpg?quality=90&webp=true&resize=440,400",
		title: "Cauliflower cheese",
		description:
			"Pop this classic side dish in the oven when you take your roast chicken out to rest, so there's no hot shelf jugglin",
		prepTime: "10 mins",
		exp: 10,
		skill: "easy",
		cousine: "Fusion",
		type: "healthy"
	}
];
