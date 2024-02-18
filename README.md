# prnsFill
prnsFill is a script to fill a person's links to sites showing their pronouns, such as pronouns.cc, pronouns.page and pronouny.xyz.

## Setup
Setup involves configuring the constant variables at the start of the script:
```js
const prnsClassName = "prnshere"; // where to target
const prnsFillWithHref = "https://pronouns.cc/@toranine09"; // link to fill with
const prnsFlavourText = ["pronoun list", "view my pronouns", "he/they/it"];
const prnsFallbackFlavourText = "he/they/it";
const prnsTextRandomType = "uniform"; // how random/type of randomness
const prnsFillIgnoreClass = "prnsfillignore"; // classname to skip
const prnsFillIgnoreID = "prnsfillignore"; // id to skip
```
The variable `prnsClassName` is where you put the HTML class name for the element(s) you want to target and update.

The variable `prnsFillWithHref` determines the link to use for the href.

Flavour text refers to the clickable text to update the element with. It's an array, so you can set a list of text to be randomly selected. It also works with just one item, so you don't need to have multiple entries.

The fallback text will completely overwrite the text inside element, so make sure to set this to something that you're happy to display if the calculation or random flavour text fails.

The `textRandomType` refers to how the randomness is performed - `uniform` will choose one flavour text randomly and use it for all instances of pronoun link element, while `trueRandom` will choose a random flavour text per each element.

Finally, the `prnsFillIgnoreClass`, and `prnsFillIgnoreID` are used to skip over any elements you have manually assigned the intended link to.

## Limitations
- Dynamic flavour text based on linked site not currently supported.
- Expects that the pronoun link may appear in multiple places on the page (class, not element).

### License
Copyright 2023 toranine09

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this work except in compliance with the License.

You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
