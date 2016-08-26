declare namespace fixture {
  export var el: HTMLElement;
  export var json: any[];

  export function load(...files: string[]): HTMLElement[]|Object|any[];
  export function load(file1: string, append?: boolean): HTMLElement[]|Object|any[];
  export function load(file1: string, file2: string, append?: boolean): HTMLElement[]|Object|any[];
  export function load(file1: string, file2: string, file3: string, append?: boolean): HTMLElement[]|Object|any[];
  export function load(file1: string, file2: string, file3: string, file4: string, append?: boolean): HTMLElement[]|Object|any[];
  export function load(file1: string, file2: string, file3: string, file4: string, file5: string, append?: boolean): HTMLElement[]|Object|any[];

  export function set(...htmlStrs: string[]): HTMLElement|HTMLElement[];
  export function set(htmlStr1: string, append?: boolean): HTMLElement|HTMLElement[];
  export function set(htmlStr1: string, htmlStr2: string, append?: boolean): HTMLElement|HTMLElement[];
  export function set(htmlStr1: string, htmlStr2: string, htmlStr3: string, append?: boolean): HTMLElement|HTMLElement[];
  export function set(htmlStr1: string, htmlStr2: string, htmlStr3: string, htmlStr4: string, append?: boolean): HTMLElement|HTMLElement[];
  export function set(htmlStr1: string, htmlStr2: string, htmlStr3: string, htmlStr4: string, htmlStr5: string, append?: boolean): HTMLElement|HTMLElement[];

  export function cleanup(): void;

  export function setBase(fixtureBasePath: string): void;
}
