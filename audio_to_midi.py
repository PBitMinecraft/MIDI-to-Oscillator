import aubio
import numpy as np
import mido
from mido import MidiFile, MidiTrack, Message
import sys
import os

def audio_to_midi(input_file, output_file):
    win_s = 4096
    hop_s = win_s // 2
    pitch_o = aubio.pitch("default", win_s, hop_s, 44100)
    pitch_o.set_unit("Hz")
    pitch_o.set_silence(-40)

    try:
        import soundfile as sf
        audio, samplerate = sf.read(input_file)
    except ImportError:
        print("Please install the 'soundfile' library to read audio files.")
        return

    notes = []
    for frame in audio:
        pitch = pitch_o(frame)[0]
        if pitch > 0:
            midi_note = int(round(69 + 12 * np.log2(pitch / 440.0)))
            notes.append(midi_note)

    midi_file = MidiFile()
    track = MidiTrack()
    midi_file.tracks.append(track)

    for note in notes:
        track.append(Message('note_on', note=note, velocity=64, time=0))
        track.append(Message('note_off', note=note, velocity=64, time=500))

    midi_file.save(output_file)

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python audio_to_midi.py <input_file> <output_file>")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]

    if not os.path.isfile(input_file):
        print(f"Input file {input_file} does not exist.")
        sys.exit(1)

    audio_to_midi(input_file, output_file)
    print(f"Conversion complete. MIDI file saved as {output_file}.")
