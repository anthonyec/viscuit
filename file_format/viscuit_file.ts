declare enum RuleType {
  Rule = 'rule'
}

declare enum DynamicObjectType {
  Interaction = -1,

  // Confirm sounds, I think they are incorrectly assigned - but the numbers are correct
  SoundOrange = 15,
  SoundPink = 17,
  SoundPurple = 13,
  SoundBlue = 11,
  SoundCyan = 10,
  SoundGreen = 8,
  SoundYellow = 6,
}

declare enum VObjectType {
  /** Graphic */
  Pict = 'vispict',

  /** Sound and interaction */
  Dynamic = 'dparts'
}

declare enum PictType {
  Picture = 'picture'
}

declare enum FileType {
  Viscuit = 'viscuit'
}

declare enum GridSize {
  None = 0,
  Small = 16,
  Medium = 21,
  Large = 32,
  VeryLarge = 42
}

declare enum ViewType {
  View = "view"
}

/** The higher the number the slower the speed. Acts as a delay between steps */
declare enum SimulationSpeed {
  VerySlow = 900,
  Slow = 600,
  Fast = 400,
  VeryFast = 300
}

declare enum WrapBoundSize {
  /** About 50% */
  HalfObject = 0,

  /** Object wraps when it's one whole of an object size out of bounds. Depending on speed this can look less */
  SingleObject = 1,

  /** Object wraps when it's about double an object size out of bounds */
  DoubleObject = 2,

  /** Object never wraps */
  NoWrap = -1
}

declare interface VObject {
  /** Horizontal position */
  x: number;

  /** Vertical position */
  y: number;

  /** Rotation in degrees */
  rotation: number;

  /** Name of a Pict */
  name: string;

  /** Type of object */
  type: VObjectType;

  /** Value defining what kind of dynamic object is used */
  value?: DynamicObjectType;
}

declare interface Rule {
  x: number;
  y: number;

  /** Unknown - I havent seen other kinds of rule types yet */
  type: RuleType;

  /* First state */
  head: VObject[];

  /* Second state */
  body: VObject[];
}

declare interface PictJSON {
  points: number[],
  psize: number;
  pcolor: number;
  palpha: number;
}

declare interface Pict {
  /** Identifier used for referencing grapics */
  name: string;

  /** TBC - seems to be an base64 encoded and compressed graphic, still unsure how to decode correctly */
  base64?: string;

  /** TBC - why and when this is used, seems to be a vector or if the pict is simple? */
  json?: PictJSON[]

  /** TBC - Type of Pict */
  type: PictType;

  /** Unknown */
  info?: {
    visible: number;
    draggable: number;
  }
}

declare interface ViscuitFile {
  /** TBC - File version */
  version: string;

  /** TBC - Project ID file is based on */
  base: string;

  /** Unknown */
  machine: string;

  /** Initial stage state with objects in starting positions */
  stage: VObject[];

  /** TBC - File type or app used to create file */
  type: FileType;

  /** Stage view settings */
  view: {
      /** Bounds size at which an object should wrap vertically */
      ivloop: WrapBoundSize;

      /** Bounds size at which an object should wrap horizontally */
      ihloop: WrapBoundSize;

      /** Rotate instead of transforming objects on the stage */
      hasrotatebtn: boolean;

      /** Size of the grid, this also affect simulation movememnt */
      grid: GridSize;

      /** Unknown */
      type: ViewType;

      /** Unknown */
      dynamic: boolean;

      /** Unknown */
      hidetools: {
        /** Unknown */
        tone?: boolean;

        /** Unknown */
        touch?: boolean;

        /** Unknown */
        setting?: boolean,

        /** Unknown */
        pause?: boolean
      };

      /** Simulation speed */
      speed: SimulationSpeed;

      /** Unknown - file version or app version? */
      version: number;

      /** TBC - Maximum number of objects allow on the stage */
      maxobj: number;

      /** Stage width */
      width: number;

      /** Stage heught */
      height: number;

      /** Top color in background gradient in decimal format  */
      c1: number;

      /** Bottom color in background gradient in decimal format */
      c2: number;

      /** Unknown */
      angleratio?: number

      /** Unknown */
      angleunit?: 1;

      /** Unknown */
      showanglenumber?: boolean;

      /** Unknown */
      ruleedit?: true;
  }

  /** Pict definitions */
  picts: Pict[];

  /** Objects or rules placed in the rules area */
  rules: Rule[] | VObject[];
}
