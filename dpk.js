import { hash, isString, stringify } from "./helpers";

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  let candidate = TRIVIAL_PARTITION_KEY;

  if (event) {
    candidate = event.partitionKey ??  hash(stringify(event), "sha3-512", "hex")
    if (!isString(candidate)) {
      candidate = stringify(candidate);
    }
  }

  return candidate.length > MAX_PARTITION_KEY_LENGTH
        ? hash(candidate, "sha3-512", "hex")
        : candidate;
};