import { compile, createFileManager } from "@noir-lang/noir_wasm";
import { CompiledCircuit } from "@noir-lang/types";

export async function getCircuit() {
  const fm = createFileManager("/");

  // retur .n;
  const main = (
    await fetch(new URL("../../contract/circuit/src/main.nr", import.meta.url))
  ).body as ReadableStream<Uint8Array>;
  const nargoToml = (
    await fetch(new URL("../../contract/circuit/Nargo.toml", import.meta.url))
  ).body as ReadableStream<Uint8Array>;
  console.log(main);
  fm.writeFile("./src/main.nr", main);
  fm.writeFile("./Nargo.toml", nargoToml);
  const result = await compile(fm);
  if (!("program" in result)) {
    throw new Error("Compilation failed");
  }
  //@ts-ignore
  return result.program as CompiledCircuit;
}
