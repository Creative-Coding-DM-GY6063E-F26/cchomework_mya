let sounds = [null,null,null,null]

async function setup() {
  createCanvas(400, 400);

sounds[0] = await loadSound('Gated_reverb_with_Strymon_plate_and_noise_gate_(drums_dry,_drums_+_verb_no_gate,_drums_+_gated_verb).ogg');
sounds[1] = await loadSound('Comic_spring_up_or_magic_trick.ogg');
sounds[2] = await loadSound('Comic_vanishing_magic_trick.ogg');
sounds[3] = await loadSound('Fast_choppy_wobbling.ogg');

//load sound file
  sound = await loadSound('Gated_reverb_with_Strymon_plate_and_noise_gate_(drums_dry,_drums_+_verb_no_gate,_drums_+_gated_verb).ogg');
}

function draw() {
  background(220);
}

function keyPressed() {
  let sound = null 

  userStartAudio();
  if (keyIsDown('a')) {
    sounds[0].play();
  } else if (keyIsDown('s')) {
    sounds[1].play();
  } else if (keyIsDown('d')) {
    sounds[2].play();
  } else if (keyIsDown('f')) {
    sounds[3].play();
  }

    if (sound) sound.play();
  }

}

