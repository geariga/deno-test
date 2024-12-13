import * as yaml from '@std/yaml';
import { readFileAsString } from '../helpers.ts';

async function getYamlAsJson() {
    const yamlData = await readFileAsString(`${Deno.cwd()}/data/pet_store.yaml`);
    return yaml.parse(yamlData, {});
}

async function getJsonAsYaml() {
    const jsonData = await readFileAsString(`${Deno.cwd()}/data/pokedex.json`);
    return yaml.stringify(JSON.parse(jsonData));
}

(async () => {
    if (import.meta.main) {
        // YAML to JSON
        const yamlJson = await getYamlAsJson();
        console.log(yamlJson);

        // JSON to YAML
        // const jsonYaml = await getJsonAsYaml();
        // console.log(jsonYaml);
    }
})();

// deno run --allow-read src/examples/3_yaml.ts