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

  /** Unknown - seems to be an base64 encoded and compressed graphic, still unsure how to decode correctly */
  base64?: string;

  /** Unknown - why and when this is used, seems to be a vector or if the pict is simple? */
  json?: PictJSON[]

  /** Unknown */
  type: PictType;

  /** Unknwon */
  info?: {
    visible: number;
    draggable: number;
  }
}

declare interface ViscuitFile {
  /** File version */
  version: string;

  /** Unknown */
  base: string;

  /** Unknown */
  machine: string;

  /** Initial stage state with objects in starting positions */
  stage: VObject[];

  /** File type */
  type: FileType;

  /** Editor settings */
  view: {
      /** Unknown - something to do with how objects wrap vertically */
      ivloop: number;

      /** Unknown - something to do with how objects wrap horizontally */
      ihloop: number;

      /** Rotate instead of transforming objects on the stage */
      hasrotatebtn: boolean;

      /** Size of the grid */
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

      /** Unknown */
      version: number;

      /** Maximum number of objects allow on the stage (?) */
      maxobj: number;

      /** Stage width */
      width: number;

      /** Stage heught */
      height: number;

      /** Unknown - seems like a creation date */
      c1: number;

      /** Unknown - seems like a modified date */
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
