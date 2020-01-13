const IMG_PATH = './image_batch';

let cmd = require('child_process');
let fileSystem = require('fs');

let baseNameFiles = [];

// Run in dry mode by default.
let dryRun = !(process.argv.includes('dry_run=false') || process.argv.includes('dry_run=FALSE'));

console.log(process.argv);
console.log('============ ATTENTION ================\n\n');
console.log(`RUNNING IN dry_run MODE? ${dryRun}\n\n`);
console.log('============ ATTENTION ================\n\n');

/* Read elements in a directory and list them.
 * Keep in mind that readdir and readdirSync
 * returns files *and* folders.
 *
 * Async approach
fileSystem.readdir(IMG_PATH, (err, files) => {
  if (err) {
    console.error(err);
  } else {
    files.forEach(file => {
      console.log(file);
    });
  }
});
*/

// Synchronous approach
// List directory
fileSystem.readdirSync(IMG_PATH).forEach(file => console.log(file));

// Show images only
fileSystem.readdirSync(IMG_PATH).forEach((file) => {
  // naïve approach to grab png images only
  if (file.endsWith('png'))
    // Remove extension from filename
    baseNameFiles.push(file.replace('.png', ''));
});

// Convert all images to jpg
// Here, we jump to the bash/sh console.
// In bash, the command is `convert image.png image.jpg`.
// We are going to save the results in a new folder.
//
// For the exec/execSync method calls, we can omit the cwd option,
// so it will grab `./` by default.

if (dryRun) {
  console.log(`Creating ${IMG_PATH}/converted folder`);
  // Print all image names as jpg
  baseNameFiles.forEach(file => {
    console.log(`Executing ./convert ${IMG_PATH}/${file}png ${IMG_PATH}/converted/${file}.jpg`);
  });
} else {
  // Async approach
  // cmd.exec(`mkdir -p ${IMG_PATH}/converted`, { cwd: '.' });

  // Synchronous approach
  cmd.execSync(`mkdir -p ${IMG_PATH}/converted`, { cwd: '.' });

  // Then, convert it :)
  baseNameFiles.forEach(file => {
    console.log(`convert ${IMG_PATH}/${file}.png ${IMG_PATH}/converted/${file}.jpg`);
    cmd.execSync(`convert ${IMG_PATH}/${file}.png ${IMG_PATH}/converted/${file}.jpg`, { cwd: '.' });
  });

  // now, list the converted files.
  fileSystem.readdirSync(`${IMG_PATH}/converted`).forEach(file => console.log(file));

  // Because we are lazy, we do script commands
  // but you can use https://www.npmjs.com/package/imagemagick
}

console.log('Good bye!');
