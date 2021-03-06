const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
	constructor(field) {
		this._field = field;
	}

	print() {
		for (let i = 0; i < this._field.length; i++) {
			console.log(this._field[i].join(""));
		}
	}

	static generateField(height, width, percentage) {
		let genField = [];
		let first = true;
		for (let i = 0; i < height; i++) {
			let row = [];
			for (let j = 0; j < width; j++) {
				if (first) {
					row.push(pathCharacter);
					first = false;
				} else {
					let ranNum = Math.floor(Math.random() * 100);
					if (ranNum < percentage) {
						row.push(hole);
					} else {
						row.push(fieldCharacter);
					}
				}
			}
			genField.push(row);
		}
		const ranHeight = Math.floor(Math.random() * height);
		const ranWidth = Math.floor(Math.random() * width);
		genField[ranHeight][ranWidth] = hat;
		return genField;
	}
}
const height = prompt("Enter height of the field: ");
const width = prompt("Enter width of the field: ");
const percentage = prompt("Enter the percentage of hole: ");

const testField = new Field(Field.generateField(height, width, percentage));
testField.print();
