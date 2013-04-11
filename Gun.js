var Bullet : Rigidbody;
var Spawn : Transform;
var BulletSpeed : float = 1000;
var ReloadTime : float = 2;
var AmmoInMag :float = 30;
var IsFullAuto = true;
static var AmmoLeft : float;
static var IsReloading = false;
static var ReloadTTime : float;
private var CanFire = true;
var FireRate = 0.1;


function Start () {
	AmmoLeft = AmmoInMag;
	ReloadTTime= ReloadTime;
}

function Update () {
	if(IsFullAuto == false){
		if(Input.GetButtonDown("Fire1")){
			if(AmmoLeft > 0){
				BroadcastMessage("FireAnim");
				Fire();
			}
		}
	}else{
		if(Input.GetButton("Fire1")){
			if(AmmoLeft > 0){
				BroadcastMessage("FireAnim");
				Fire();
			}
		
		}
	}	
		if(AmmoLeft == 0){
			Reload();
		}
		if(AmmoLeft < 0){
			AmmoLeft = 0;
		}
	
		if(Input.GetButton("Fire1")){
			if(AmmoLeft > 0){
				BroadcastMessage("FireAnim");
				Fire();
			}
		
		}
	
}

function Fire(){
	if(CanFire== true && IsReloading == false ){
		var bullet1 : Rigidbody = Instantiate(Bullet,Spawn.position,Spawn.rotation);
		bullet1.AddForce(bullet1.transform.forward*BulletSpeed);
		CanFire = false;
		yield WaitForSeconds(FireRate);
		CanFire = true;
		AmmoLeft -= 1;
	}
}

function Reload(){
	CanFire = false;
	IsReloading = true;
	BroadcastMessage("ReloadAnim");
	yield WaitForSeconds(ReloadTime);
	IsReloading = false;
	CanFire = true;
	AmmoLeft = AmmoInMag;
}