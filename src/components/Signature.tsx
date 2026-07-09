/**
 * The site's signature divider. Swap the one active import below to change it
 * everywhere. Candidates live in ./signatures — preview at /signatures.
 *   CommitLine | SignalWave | TerminalType | EqualizerBars
 */
import CommitLine from "./signatures/CommitLine";

export default function Signature({ label }: { label?: string }) {
  return <CommitLine label={label} />;
}
