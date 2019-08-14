// tslint:disable: max-line-length
import { AudioRange, Cents, Degrees, Frequency, Positive } from "../../core/type/Units";
import { Omit } from "../../core/util/Interface";
import { Signal } from "../../signal/Signal";
import { SourceOptions } from "../Source";

/**
 * The common interface of all Oscillators
 */
export interface ToneOscillatorInterface {
	baseType: OscillatorType | "pulse" | "pwm";
	type: ExtendedToneOscillatorType;
	readonly frequency: Signal<Frequency>;
	readonly detune: Signal<Cents>;
	phase: Degrees;
	partials: number[];
	partialCount?: number;
}

/**
 * Oscillators with partials
 */
type SineWithPartials =
	"sine1" | "sine2" | "sine3" | "sine4" | "sine5" | "sine6" | "sine7" | "sine8" | "sine9" |
	"sine10" | "sine11" | "sine12" | "sine13" | "sine14" | "sine15" | "sine16" | "sine17" | "sine18" | "sine19" |
	"sine20" | "sine21" | "sine22" | "sine23" | "sine24" | "sine25" | "sine26" | "sine27" | "sine28" | "sine29" |
	"sine30" | "sine31" | "sine32";

type SquareWithPartials =
	"square1" | "square2" | "square3" | "square4" | "square5" | "square6" | "square7" | "square8" | "square9" |
	"square10" | "square11" | "square12" | "square13" | "square14" | "square15" | "square16" | "square17" | "square18" | "square19" |
	"square20" | "square21" | "square22" | "square23" | "square24" | "square25" | "square26" | "square27" | "square28" | "square29" |
	"square30" | "square31" | "square32";

type SawtoothWithPartials =
	"sawtooth1" | "sawtooth2" | "sawtooth3" | "sawtooth4" | "sawtooth5" | "sawtooth6" | "sawtooth7" | "sawtooth8" | "sawtooth9" |
	"sawtooth10" | "sawtooth11" | "sawtooth12" | "sawtooth13" | "sawtooth14" | "sawtooth15" | "sawtooth16" | "sawtooth17" | "sawtooth18" | "sawtooth19" |
	"sawtooth20" | "sawtooth21" | "sawtooth22" | "sawtooth23" | "sawtooth24" | "sawtooth25" | "sawtooth26" | "sawtooth27" | "sawtooth28" | "sawtooth29" |
	"sawtooth30" | "sawtooth31" | "sawtooth32";

type TriangleWithPartials =
	"triangle1" | "triangle2" | "triangle3" | "triangle4" | "triangle5" | "triangle6" | "triangle7" | "triangle8" | "triangle9" |
	"triangle10" | "triangle11" | "triangle12" | "triangle13" | "triangle14" | "triangle15" | "triangle16" | "triangle17" | "triangle18" | "triangle19" |
	"triangle20" | "triangle21" | "triangle22" | "triangle23" | "triangle24" | "triangle25" | "triangle26" | "triangle27" | "triangle28" | "triangle29" |
	"triangle30" | "triangle31" | "triangle32";

type TypeWithPartials = SineWithPartials | SquareWithPartials | TriangleWithPartials | SawtoothWithPartials;

interface BaseOscillatorOptions extends SourceOptions {
	frequency: Frequency;
	detune: Cents;
	phase: Degrees;
}

export type NonCustomOscillatorType = Exclude<OscillatorType, "custom">;

type AllNonCustomOscillatorType = NonCustomOscillatorType | TypeWithPartials;

export type ToneOscillatorType = AllNonCustomOscillatorType | "custom";

export type ExtendedToneOscillatorType = ToneOscillatorType | "pwm" | "pulse";

/**
 * Oscillator Interfaces
 */
interface ToneCustomOscillatorOptions extends BaseOscillatorOptions {
	type: "custom";
	partials: number[];
}

interface ToneTypeOscillatorOptions extends BaseOscillatorOptions {
	type: NonCustomOscillatorType;
	partialCount?: number;
}

interface TonePartialOscillatorOptions extends BaseOscillatorOptions {
	type: TypeWithPartials;
}

export type ToneOscillatorConstructorOptions = ToneCustomOscillatorOptions | ToneTypeOscillatorOptions | TonePartialOscillatorOptions;

export interface ToneOscillatorOptions extends BaseOscillatorOptions {
	type: ToneOscillatorType;
	partialCount: number;
	partials: number[];
}

/**
 * FMOscillator Interface
 */
interface FMBaseOscillatorOptions extends BaseOscillatorOptions {
	harmonicity: Positive;
	modulationIndex: Positive;
	modulationType: AllNonCustomOscillatorType;
}

interface FMCustomOscillatorOptions extends FMBaseOscillatorOptions {
	type: "custom";
	partials: number[];
}

interface FMTypeOscillatorOptions extends FMBaseOscillatorOptions {
	type: NonCustomOscillatorType;
	partialsCount?: number;
}

interface FMPartialsOscillatorOptions extends FMBaseOscillatorOptions {
	type: TypeWithPartials;
}

export type FMConstructorOptions = FMTypeOscillatorOptions | FMCustomOscillatorOptions | FMPartialsOscillatorOptions;

export interface FMOscillatorOptions extends ToneOscillatorOptions {
	harmonicity: Positive;
	modulationIndex: Positive;
	modulationType: AllNonCustomOscillatorType;
}

/**
 * AMOscillator Interface
 */
interface AMBaseOscillatorOptions extends BaseOscillatorOptions {
	harmonicity: Positive;
	modulationType: AllNonCustomOscillatorType;
}

interface AMCustomOscillatorOptions extends AMBaseOscillatorOptions {
	type: "custom";
	partials: number[];
}

interface AMTypeOscillatorOptions extends AMBaseOscillatorOptions {
	type: NonCustomOscillatorType;
	partialsCount?: number;
}

interface AMPartialsOscillatorOptions extends AMBaseOscillatorOptions {
	type: TypeWithPartials;
}

export type AMConstructorOptions = AMCustomOscillatorOptions | AMTypeOscillatorOptions | AMPartialsOscillatorOptions;

export interface AMOscillatorOptions extends ToneOscillatorOptions {
	harmonicity: Positive;
	modulationType: AllNonCustomOscillatorType;
}
/**
 * FatOscillator
 */
interface FatBaseOscillatorOptions extends BaseOscillatorOptions {
	spread: Cents;
	count: Positive;
}

interface FatCustomOscillatorOptions extends FatBaseOscillatorOptions {
	type: "custom";
	partials: number[];
}

interface FatTypeOscillatorOptions extends FatBaseOscillatorOptions {
	type: NonCustomOscillatorType;
	partialCount?: number;
}

interface FatPartialsOscillatorOptions extends FatBaseOscillatorOptions {
	type: TypeWithPartials;
}

export type FatConstructorOptions = FatCustomOscillatorOptions | FatTypeOscillatorOptions | FatPartialsOscillatorOptions;

export interface FatOscillatorOptions extends ToneOscillatorOptions {
	spread: Cents;
	count: Positive;
}

/**
 * Pulse Oscillator
 */
export interface PulseOscillatorOptions extends BaseOscillatorOptions {
	type: "pulse";
	width: AudioRange;
}

/**
 * PWM Oscillator
 */
export interface PWMOscillatorOptions extends BaseOscillatorOptions {
	type: "pwm";
	modulationFrequency: Frequency;
}

/**
 * OMNI OSCILLATOR
 */

/**
 * FM Oscillators with partials
 */
type FMSineWithPartials =
	"fmsine1" | "fmsine2" | "fmsine3" | "fmsine4" | "fmsine5" | "fmsine6" | "fmsine7" | "fmsine8" | "fmsine9" |
	"fmsine10" | "fmsine11" | "fmsine12" | "fmsine13" | "fmsine14" | "fmsine15" | "fmsine16" | "fmsine17" | "fmsine18" | "fmsine19" |
	"fmsine20" | "fmsine21" | "fmsine22" | "fmsine23" | "fmsine24" | "fmsine25" | "fmsine26" | "fmsine27" | "fmsine28" | "fmsine29" |
	"fmsine30" | "fmsine31" | "fmsine32";

type FMSquareWithPartials =
	"fmsquare1" | "fmsquare2" | "fmsquare3" | "fmsquare4" | "fmsquare5" | "fmsquare6" | "fmsquare7" | "fmsquare8" | "fmsquare9" |
	"fmsquare10" | "fmsquare11" | "fmsquare12" | "fmsquare13" | "fmsquare14" | "fmsquare15" | "fmsquare16" | "fmsquare17" | "fmsquare18" | "fmsquare19" |
	"fmsquare20" | "fmsquare21" | "fmsquare22" | "fmsquare23" | "fmsquare24" | "fmsquare25" | "fmsquare26" | "fmsquare27" | "fmsquare28" | "fmsquare29" |
	"fmsquare30" | "fmsquare31" | "fmsquare32";

type FMSawtoothWithPartials =
	"fmsawtooth1" | "fmsawtooth2" | "fmsawtooth3" | "fmsawtooth4" | "fmsawtooth5" | "fmsawtooth6" | "fmsawtooth7" | "fmsawtooth8" | "fmsawtooth9" |
	"fmsawtooth10" | "fmsawtooth11" | "fmsawtooth12" | "fmsawtooth13" | "fmsawtooth14" | "fmsawtooth15" | "fmsawtooth16" | "fmsawtooth17" | "fmsawtooth18" | "fmsawtooth19" |
	"fmsawtooth20" | "fmsawtooth21" | "fmsawtooth22" | "fmsawtooth23" | "fmsawtooth24" | "fmsawtooth25" | "fmsawtooth26" | "fmsawtooth27" | "fmsawtooth28" | "fmsawtooth29" |
	"fmsawtooth30" | "fmsawtooth31" | "fmsawtooth32";

type FMTriangleWithPartials =
	"fmtriangle1" | "fmtriangle2" | "fmtriangle3" | "fmtriangle4" | "fmtriangle5" | "fmtriangle6" | "fmtriangle7" | "fmtriangle8" | "fmtriangle9" |
	"fmtriangle10" | "fmtriangle11" | "fmtriangle12" | "fmtriangle13" | "fmtriangle14" | "fmtriangle15" | "fmtriangle16" | "fmtriangle17" | "fmtriangle18" | "fmtriangle19" |
	"fmtriangle20" | "fmtriangle21" | "fmtriangle22" | "fmtriangle23" | "fmtriangle24" | "fmtriangle25" | "fmtriangle26" | "fmtriangle27" | "fmtriangle28" | "fmtriangle29" |
	"fmtriangle30" | "fmtriangle31" | "fmtriangle32";

type FMTypeWithPartials = FMSineWithPartials | FMSquareWithPartials | FMSawtoothWithPartials | FMTriangleWithPartials;

/**
 * AM Oscillators with partials
 */
type AMSineWithPartials =
	"amsine1" | "amsine2" | "amsine3" | "amsine4" | "amsine5" | "amsine6" | "amsine7" | "amsine8" | "amsine9" |
	"amsine10" | "amsine11" | "amsine12" | "amsine13" | "amsine14" | "amsine15" | "amsine16" | "amsine17" | "amsine18" | "amsine19" |
	"amsine20" | "amsine21" | "amsine22" | "amsine23" | "amsine24" | "amsine25" | "amsine26" | "amsine27" | "amsine28" | "amsine29" |
	"amsine30" | "amsine31" | "amsine32";

type AMSquareWithPartials =
	"amsquare1" | "amsquare2" | "amsquare3" | "amsquare4" | "amsquare5" | "amsquare6" | "amsquare7" | "amsquare8" | "amsquare9" |
	"amsquare10" | "amsquare11" | "amsquare12" | "amsquare13" | "amsquare14" | "amsquare15" | "amsquare16" | "amsquare17" | "amsquare18" | "amsquare19" |
	"amsquare20" | "amsquare21" | "amsquare22" | "amsquare23" | "amsquare24" | "amsquare25" | "amsquare26" | "amsquare27" | "amsquare28" | "amsquare29" |
	"amsquare30" | "amsquare31" | "amsquare32";

type AMSawtoothWithPartials =
	"amsawtooth1" | "amsawtooth2" | "amsawtooth3" | "amsawtooth4" | "amsawtooth5" | "amsawtooth6" | "amsawtooth7" | "amsawtooth8" | "amsawtooth9" |
	"amsawtooth10" | "amsawtooth11" | "amsawtooth12" | "amsawtooth13" | "amsawtooth14" | "amsawtooth15" | "amsawtooth16" | "amsawtooth17" | "amsawtooth18" | "amsawtooth19" |
	"amsawtooth20" | "amsawtooth21" | "amsawtooth22" | "amsawtooth23" | "amsawtooth24" | "amsawtooth25" | "amsawtooth26" | "amsawtooth27" | "amsawtooth28" | "amsawtooth29" |
	"amsawtooth30" | "amsawtooth31" | "amsawtooth32";

type AMTriangleWithPartials =
	"amtriangle1" | "amtriangle2" | "amtriangle3" | "amtriangle4" | "amtriangle5" | "amtriangle6" | "amtriangle7" | "amtriangle8" | "amtriangle9" |
	"amtriangle10" | "amtriangle11" | "amtriangle12" | "amtriangle13" | "amtriangle14" | "amtriangle15" | "amtriangle16" | "amtriangle17" | "amtriangle18" | "amtriangle19" |
	"amtriangle20" | "amtriangle21" | "amtriangle22" | "amtriangle23" | "amtriangle24" | "amtriangle25" | "amtriangle26" | "amtriangle27" | "amtriangle28" | "amtriangle29" |
	"amtriangle30" | "amtriangle31" | "amtriangle32";

type AMTypeWithPartials = AMSineWithPartials | AMSquareWithPartials | AMSawtoothWithPartials | AMTriangleWithPartials;

/**
 * Fat Oscillators with partials
 */
type FatSineWithPartials =
	"fatsine1" | "fatsine2" | "fatsine3" | "fatsine4" | "fatsine5" | "fatsine6" | "fatsine7" | "fatsine8" | "fatsine9" |
	"fatsine10" | "fatsine11" | "fatsine12" | "fatsine13" | "fatsine14" | "fatsine15" | "fatsine16" | "fatsine17" | "fatsine18" | "fatsine19" |
	"fatsine20" | "fatsine21" | "fatsine22" | "fatsine23" | "fatsine24" | "fatsine25" | "fatsine26" | "fatsine27" | "fatsine28" | "fatsine29" |
	"fatsine30" | "fatsine31" | "fatsine32";

type FatSquareWithPartials =
	"fatsquare1" | "fatsquare2" | "fatsquare3" | "fatsquare4" | "fatsquare5" | "fatsquare6" | "fatsquare7" | "fatsquare8" | "fatsquare9" |
	"fatsquare10" | "fatsquare11" | "fatsquare12" | "fatsquare13" | "fatsquare14" | "fatsquare15" | "fatsquare16" | "fatsquare17" | "fatsquare18" | "fatsquare19" |
	"fatsquare20" | "fatsquare21" | "fatsquare22" | "fatsquare23" | "fatsquare24" | "fatsquare25" | "fatsquare26" | "fatsquare27" | "fatsquare28" | "fatsquare29" |
	"fatsquare30" | "fatsquare31" | "fatsquare32";

type FatSawtoothWithPartials =
	"fatsawtooth1" | "fatsawtooth2" | "fatsawtooth3" | "fatsawtooth4" | "fatsawtooth5" | "fatsawtooth6" | "fatsawtooth7" | "fatsawtooth8" | "fatsawtooth9" |
	"fatsawtooth10" | "fatsawtooth11" | "fatsawtooth12" | "fatsawtooth13" | "fatsawtooth14" | "fatsawtooth15" | "fatsawtooth16" | "fatsawtooth17" | "fatsawtooth18" | "fatsawtooth19" |
	"fatsawtooth20" | "fatsawtooth21" | "fatsawtooth22" | "fatsawtooth23" | "fatsawtooth24" | "fatsawtooth25" | "fatsawtooth26" | "fatsawtooth27" | "fatsawtooth28" | "fatsawtooth29" |
	"fatsawtooth30" | "fatsawtooth31" | "fatsawtooth32";

type FatTriangleWithPartials =
	"fattriangle1" | "fattriangle2" | "fattriangle3" | "fattriangle4" | "fattriangle5" | "fattriangle6" | "fattriangle7" | "fattriangle8" | "fattriangle9" |
	"fattriangle10" | "fattriangle11" | "fattriangle12" | "fattriangle13" | "fattriangle14" | "fattriangle15" | "fattriangle16" | "fattriangle17" | "fattriangle18" | "fattriangle19" |
	"fattriangle20" | "fattriangle21" | "fattriangle22" | "fattriangle23" | "fattriangle24" | "fattriangle25" | "fattriangle26" | "fattriangle27" | "fattriangle28" | "fattriangle29" |
	"fattriangle30" | "fattriangle31" | "fattriangle32";

type FatTypeWithPartials = FatSineWithPartials | FatSquareWithPartials | FatSawtoothWithPartials | FatTriangleWithPartials;

/**
 * Omni FM
 */
interface OmniFMCustomOscillatorOptions extends FMBaseOscillatorOptions {
	type: "fmcustom";
	partials: number[];
}

interface OmniFMTypeOscillatorOptions extends FMBaseOscillatorOptions {
	type: "fmsine" | "fmsquare" | "fmsawtooth" | "fmtriangle";
	partialsCount?: number;
}

interface OmniFMPartialsOscillatorOptions extends FMBaseOscillatorOptions {
	type: FMTypeWithPartials;
}

/**
 * Omni AM
 */
interface OmniAMCustomOscillatorOptions extends AMBaseOscillatorOptions {
	type: "amcustom";
	partials: number[];
}

interface OmniAMTypeOscillatorOptions extends AMBaseOscillatorOptions {
	type: "amsine" | "amsquare" | "amsawtooth" | "amtriangle";
	partialsCount?: number;
}

interface OmniAMPartialsOscillatorOptions extends AMBaseOscillatorOptions {
	type: AMTypeWithPartials;
}

/**
 * Omni Fat
 */
interface OmniFatCustomOscillatorOptions extends FatBaseOscillatorOptions {
	type: "fatcustom";
	partials: number[];
}

interface OmniFatTypeOscillatorOptions extends FatBaseOscillatorOptions {
	type: "fatsine" | "fatsquare" | "fatsawtooth" | "fattriangle";
	partialsCount?: number;
}

interface OmniFatPartialsOscillatorOptions extends FatBaseOscillatorOptions {
	type: FatTypeWithPartials;
}

export type OmniOscillatorType =
	"fatsine" | "fatsquare" | "fatsawtooth" | "fattriangle" | "fatcustom" | FatTypeWithPartials |
	"fmsine" | "fmsquare" | "fmsawtooth" | "fmtriangle" | "fmcustom" | FMTypeWithPartials |
	"amsine" | "amsquare" | "amsawtooth" | "amtriangle" | "amcustom" | AMTypeWithPartials |
	TypeWithPartials | OscillatorType | "pulse" | "pwm";

export type OmniOscillatorConstructorOptions =
	PulseOscillatorOptions | PWMOscillatorOptions |
	OmniFatCustomOscillatorOptions | OmniFatTypeOscillatorOptions | OmniFatPartialsOscillatorOptions |
	OmniFMCustomOscillatorOptions | OmniFMTypeOscillatorOptions | OmniFMPartialsOscillatorOptions |
	OmniAMCustomOscillatorOptions | OmniAMTypeOscillatorOptions | OmniAMPartialsOscillatorOptions |
	ToneOscillatorConstructorOptions;

// export type OmniOscillatorSourceOptions = OmniOscillatorConstructorOptions & SourceOptions;

export type OmniOscillatorOptions =
	PulseOscillatorOptions & PWMOscillatorOptions &
	OmniFatCustomOscillatorOptions & OmniFatTypeOscillatorOptions & OmniFatPartialsOscillatorOptions &
	OmniFMCustomOscillatorOptions & OmniFMTypeOscillatorOptions & OmniFMPartialsOscillatorOptions &
	OmniAMCustomOscillatorOptions & OmniAMTypeOscillatorOptions & OmniAMPartialsOscillatorOptions &
	ToneOscillatorConstructorOptions;

type OmitSourceOptions<T extends BaseOscillatorOptions> = Omit<T, "frequency" | "detune" | "context">;

/**
 * The settable options for the omni oscillator inside of the source which excludes certain attributes that are defined by the parent class
 */
export type OmniOscillatorSynthOptions =
	OmitSourceOptions<PulseOscillatorOptions> | OmitSourceOptions<PWMOscillatorOptions> |
	OmitSourceOptions<OmniFatCustomOscillatorOptions> | OmitSourceOptions<OmniFatTypeOscillatorOptions> | OmitSourceOptions<OmniFatPartialsOscillatorOptions> |
	OmitSourceOptions<OmniFMCustomOscillatorOptions> | OmitSourceOptions<OmniFMTypeOscillatorOptions> | OmitSourceOptions<OmniFMPartialsOscillatorOptions> |
	OmitSourceOptions<OmniAMCustomOscillatorOptions> | OmitSourceOptions<OmniAMTypeOscillatorOptions> | OmitSourceOptions<OmniAMPartialsOscillatorOptions> |
	OmitSourceOptions<ToneOscillatorConstructorOptions>;
