enum Membership {
  Simple,
  Standard,
  Premium,
}

const membership = Membership.Standard;
console.log(membership); // => 1
console.log(Membership[2]); // => Premium

enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM',
}
const social = SocialMedia.INSTAGRAM
console.log(social); // => INSTAGRAM
