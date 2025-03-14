export function getAnimationClass(className: AnimationClass) {
	return className;
}

const ANIMATIONS = ["neonScan", "swing-in-top-fwd"] as const;
type AnimationClass = (typeof ANIMATIONS)[number];
