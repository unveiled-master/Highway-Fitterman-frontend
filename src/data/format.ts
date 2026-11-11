/** Cedi formatting per DESIGN.md: "GH₵450.00", no space, Space Grotesk via .num */
export const gh = (n: number) => `GH₵${n.toFixed(2)}`;
