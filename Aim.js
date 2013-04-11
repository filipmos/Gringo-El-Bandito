var HipPose: Vector3;
var AimPose : Vector3;
private var WepCam : GameObject;


function Start () {
	transform.localPosition = HipPose;
	WepCam = GameObject.FindGameObjectWithTag("WeponCamera");
}

function Update () {
	if(Input.GetButton("Fire2")){
		transform.localPosition = AimPose;
		WepCam.camera.fieldOfView = 50;
	}
	if(!Input.GetButton("Fire2")){
		transform.localPosition = HipPose;
		WepCam.camera.fieldOfView = 60;
	}
}