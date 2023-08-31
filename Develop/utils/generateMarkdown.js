// TODO: Create a function that returns a license badge based on which license is passed in
const licenses = {
  'Apache': {
    badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    link: 'https://opensource.org/licenses/Apache-2.0',
    info: `   Copyright [yyyy] [name of copyright owner]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and 
limitations under the License.`
  },
  'MIT': {
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    link: 'https://opensource.org/licenses/MIT',
    info: `Copyright <YEAR> <COPYRIGHT HOLDER>

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”),
  to deal in the Software without restriction, including without limitation the rights to 
  use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
  and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  
  THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
   IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
   TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  },
}
function generateLicense(answers) {
  let license = answers.license;
  if (licenses[license]) {
    licenseBadge = licenses[license].badge;
    licenseLink = licenses[license].link;
    licenseInfo = licenses[license].info;
  } return licenseBadge, licenseLink, licenseInfo;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  generateLicense(answers)
  return `# ${answers.name} ${licenseBadge}

  ## Description

  ${answers.description}
## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation 
${answers.installation}

## Usage

${answers.usage}

## Credits
${answers.credits}

GitHub Username:  ${answers.github}

## License 

${licenseInfo}
${licenseLink}
  `;
}

module.exports = generateMarkdown;
