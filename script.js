const imageUrls = {
  Aarushi: '/allmembers/Aarushi.jpg',
  Akshata:  '/allmembers/Akshata.jpg',
  Deep:  '/allmembers/Deep.jpg',
  Ishika:  '/allmembers/Ishika.jpg',
  Krupa:  '/allmembers/krupa.jpg',
  Mohan:  '/allmembers/Mohan.jpg',
  Maulya:  '/allmembers/Maulya.jpg',
  Manas:  '/allmembers/Manas.jpg',
  Prem:  '/allmembers/Prem.jpg',
  Yash: '/allmembers/Yash.jpg',
  "You?":  '/allmembers/You_.jpg',
};

document.addEventListener('mousemove', function(event) {
  const teamMembers = document.querySelectorAll('.team-grid li');

  teamMembers.forEach((member) => {
    const eid = member;
    const span = member.querySelector('.tooltip-title');
    const name = member.querySelector('.eye');

    const diamentions = eid.getBoundingClientRect();
    const left = diamentions.left;
    const width = diamentions.width;
    const top = diamentions.top;
    const height = diamentions.height;

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const mouseX = event.pageX - centerX;
    const mouseY = -event.pageY + centerY;

    const rad = Math.atan2(mouseY, mouseX); // In radians
    const deg = rad * (180 / Math.PI);

    let w;
    if (deg < 22.5 && deg >= -22.5) {
      w = '-50px';
    } else if (deg < 67.5 && deg >= 22.5) {
      w = '-108px';
    } else if (deg < 112.5 && deg >= 67.5) {
      w = '-165px';
    } else if (deg < 157.5 && deg >= 112.5) {
      w = '-223px';
    } else if ((deg < 180 && deg >= 157.5) || (deg < -157.5 && deg >= -180)) {
      w = '-280px';
    } else if (deg < -112.5 && deg >= -157.5) {
      w = '-335px';
    } else if (deg < -67.5 && deg >= -112.5) {
      w = '-395px';
    } else if (deg < -22.5 && deg >= -67.5) {
      w = '-450px';
    }

    const x = `${w} 0px`;

    name.style.backgroundPosition = x;
  });
});

const teamList = document.querySelector('.team-grid');

let index = 0;
for (const member in imageUrls) {
  const listItem = document.createElement('li');
  listItem.className = 'visible-member';
  const eye = document.createElement('div');
  eye.className = 'eye';
  eye.style.backgroundImage = `url(${imageUrls[member]})`;
  const tooltip = document.createElement('strong');
  tooltip.className = 'tooltip-title';
  tooltip.style.display = 'none';
  tooltip.innerText = member;

  if (index === Object.keys(imageUrls).length - 1) {
    const link = document.createElement('a');
    link.href = '/careers.html';  // Adjust the URL as needed
    link.appendChild(eye);
    listItem.appendChild(link);
  } else {
    listItem.appendChild(eye);
  }

  listItem.appendChild(tooltip);

  // Show tooltip on hover
  listItem.addEventListener('mouseenter', () => {
    tooltip.style.display = 'block';
  });

  // Hide tooltip when not hovered
  listItem.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });

  teamList.appendChild(listItem);
  index++;
}
