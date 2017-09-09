var data = {
	"food": [
		{
			"name": "Apple",
			"type": "fruit",
			"category": "Fruit",
			"content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			"id": 1
		},
		{
			"name": "Aubergine",
			"type": "vegetable",
			"category": "Gemüse",
			"content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			"id": 2
		},
		{
			"name": "Banana",
			"type": "fruit",
			"category": "Fruit",
			"content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			"id": 3
		},
		{
			"name": "Broccoli",
			"type": "vegetable",
			"category": "Fruit",
			"content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			"id": 4
		},
		{
			"name": "Chicken",
			"type": "meat",
			"category": "Meat",
			"content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			"id": 5
		},
		{
			"name": "Orange",
			"type": "fruit",
			"category": "Fruit",
			"content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			"id": 6
		},
		{
			"name": "Beef",
			"type": "meat",
			"category": "Meat",
			"content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			"id": 7
		},
		{
			"name": "Zucchini",
			"type": "vegetable",
			"category": "Vegetable",
			"content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			"id": 8
		}
	]
};

Vue.component('card', {
	name: 'card',
	props: ['card'],
	template: '#card-template'
});

var myApp = new Vue({
	el: '#myApp',
	data: {
		viewData: data,
		filterArr: []
	},
	computed: {
		// Function to create unique Types for displaying options dynamically in Checkbox
		uniqueTypes: function () {
			var unique = {},
				distinct = [],
				vm = this;

			for( var i in vm.viewData.food ){
				if( typeof(unique[vm.viewData.food[i].type]) == "undefined"){
					distinct.push(vm.viewData.food[i].type);
				}
				unique[vm.viewData.food[i].type] = 0;
			}

			return distinct;
		},
		// Function to filter view based on checkbox selection
		filterList: function () {
			var vm = this,
				retVal = [];

			for (var i = 0; i < vm.viewData.food.length; i++) {
				if (vm.filterArr.indexOf(vm.viewData.food[i].type) !== -1 || vm.filterArr.length === 0) {
					retVal.push(vm.viewData.food[i]);
				}
			}
			return retVal;
		}
	}
});

