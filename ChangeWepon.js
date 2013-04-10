var Primary : GameObject;
var Secondary :GameObject;

function Start () {
	Secondary.active = false;
}

function Update () {
	if(Input.GetKeyDown("2") && Secondary.active == true){
		Primary.SetActiveRecursively(true);
		Secondary.SetActiveRecursively(false);
	}
	if(Input.GetKeyDown("1") && Primary.active == true){
		Primary.SetActiveRecursively(false);
		Secondary.SetActiveRecursively(true);
	}
}