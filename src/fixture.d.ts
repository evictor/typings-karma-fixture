declare module fixture {
  var el: HTMLElement;
  var json: any[];

  function load(...files: string[]): HTMLElement[]|Object|any[];
  function load(file: string, append: boolean = false): HTMLElement[]|Object|any[];
  function load(file: string, file: string, append: boolean = false): HTMLElement[]|Object|any[];
  function load(file: string, file: string, file: string, append: boolean = false): HTMLElement[]|Object|any[];
  function load(file: string, file: string, file: string, file: string, append: boolean = false): HTMLElement[]|Object|any[];
  function load(file: string, file: string, file: string, file: string, file: string, append: boolean = false): HTMLElement[]|Object|any[];

  function set(...htmlStrs: string[]): HTMLElement|HTMLElement[];
  function set(htmlStr: string, append = false): HTMLElement|HTMLElement[];
  function set(htmlStr: string, htmlStr: string, append = false): HTMLElement|HTMLElement[];
  function set(htmlStr: string, htmlStr: string, htmlStr: string, append = false): HTMLElement|HTMLElement[];
  function set(htmlStr: string, htmlStr: string, htmlStr: string, htmlStr: string, append = false): HTMLElement|HTMLElement[];
  function set(htmlStr: string, htmlStr: string, htmlStr: string, htmlStr: string, htmlStr: string, append = false): HTMLElement|HTMLElement[];

  function cleanup(): void;

  function setBase(fixtureBasePath: string): void;
}

export = fixture;
