using UnityEngine;
using System.Collections;

public class MultiplayerMenu : Photon.MonoBehaviour {
	
	private delegate void MenuDelegate();
	private MenuDelegate menuFunction;
	
	private float screenHeight;
	private float screenWidth;
	private float buttonHeight;
	private  float buttonWidth;
		
	static public string userName;
	static public bool connecting = false;
	static public bool connected = false;
	
	void Start () {
		screenHeight = Screen.height;
		screenWidth = Screen.width;
		
		buttonHeight = screenHeight * 0.1f;
		buttonWidth = screenWidth * 0.2f;
		
		menuFunction = MultiMenu;
		
		
		
	}
	
	void OnGUI(){
		menuFunction();
	}
	void MultiMenu(){
		if(GUI.Button(new Rect((screenWidth - buttonWidth)*0.5f,screenHeight * 0.1f,buttonWidth,buttonHeight),"Host")){
			
		}
		if(GUI.Button(new Rect((screenWidth - buttonWidth)*0.5f,screenHeight * 0.3f,buttonWidth,buttonHeight),"Join")){
			
		}
		if(GUI.Button(new Rect((screenWidth - buttonWidth)*0.5f,screenHeight * 0.5f,buttonWidth,buttonHeight),"Back")){
			Application.LoadLevel("Menu");
		}
	}
	
}