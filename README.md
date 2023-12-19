# prnsFill
prnsFill is a script for use on websites which dynamically fill a person's links to sites showing their pronouns, such as pronouns.cc, pronouns.page and pronouny.xyz.

## Setup
The only configuration required is to set the ID of the HTML element, the link, the clickable flavour text, the fallback text to display if the script fails to complete, and the type of randomness for the clickable flavour text.
```js
const prnsElementId = "prnshere";
const prnsLink = "https://pronouns.cc/@toranine09";
const prnsFlavourText = ["pronoun list", "view my pronouns"];
const fallbackPrnsText = "he/they/it";
const textRandomType = "uniform";
```
The flavour text is an array, so you can set a list of text to be randomly selected. It also works with just one item, so you don't need to have multiple entries.
The fallback text will completely overwrite the text inside element, so make sure to set this to something that you're happy to display if the calculation or random flavour text fails. Note that if the user doesn't have JavaScript enabled, this text will not set at all. The `textRandomType` refers to how the randomness is performed - `uniform` to have the randomly chosen text appear for each location on the page, or `trueRandom` for a randomly chosen text for each instance of the pronoun link appearing.

## Limitations
- The script does not currently support automatically pulling from the linked site to get a set of pronouns for the flavour text.
- The script expects a class, not an element.
- The script would need to be modified if the use case is not static/pre-determined.

### License
Copyright 2023 toranine09
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this work except in compliance with the License.
You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
