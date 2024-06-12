import fs from 'fs';
import path from 'path';

export function listAll(where: string, recursive: boolean = false){
	return recursive ? [...readAllFilesRecursively(where)] : fs.readdirSync(where);
}

export function replaceInFile(file: string, stringToFind: string, replaceWith: string){
	const fileContent = fs.readFileSync(file).toString();
	if(fileContent.includes(stringToFind)){
		const modifiedContent = fileContent.replace(stringToFind, replaceWith);
		fs.writeFileSync(file, modifiedContent);
	}
}

function* readAllFilesRecursively(baseDir: string): Generator<string> {
	const files = fs.readdirSync(baseDir, {withFileTypes: true});

	for (const file of files) {
		if(file.isDirectory()){
			yield* readAllFilesRecursively(path.join(baseDir, file.name));
		} else {
			yield path.join(baseDir, file.name);
		}
	}
}
