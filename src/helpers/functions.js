export function bindEventsListener() {
  let projectStructureItems = document.getElementsByClassName("project-structure-item");
  Array.from(projectStructureItems).forEach(
    item => item.addEventListener('click', () => {
      item.classList.toggle('clicked');
      let childSubMenu = document.querySelector(`#${item.id} ~ .desc-item`);
      childSubMenu.classList.toggle('open');
    })
  );
};