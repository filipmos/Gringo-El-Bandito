using UnityEngine;
using System.Collections;

public class SinglePlayerMenu : MonoBehaviour {
	
	private delegate void MenuDelegate();
	private MenuDelegate menuFunction;
	
	private float screenHeight;
	private float screenWidth;
	private float buttonHeight;
	private  float buttonWidth;
		
	void Start () {
		screenHeight = Screen.height;
		screenWidth = Screen.width;
		
		buttonHeight = screenHeight * 0.1f;
		buttonWidth = screenWidth * 0.2f;
		
		menuFunction = SingleMenu;
		
	}
	
	void OnGUI(){
		menuFunction();
	}
	
	void SingleMenu(){
		if(GUI.Button(new Rect((screenWidth - buttonWidth)*0.5f,screenHeight * 0.1f,buttonWidth,buttonHeight),"Island Of Doom")){
			Application.LoadLevel("Level1");
		}
		if(GUI.Button(new Rect((screenWidth - buttonWidth)*0.5f,screenHeight * 0.3f,buttonWidth,buttonHeight),"Arena")){
			Application.LoadLevel("Level2");
		}
		if(GUI.Button(new Rect((screenWidth - buttonWidth)*0.5f,screenHeight * 0.5f,buttonWidth,buttonHeight),"Back")){
			Application.LoadLevel("Menu");
		}
	}
	
}