﻿import * as buttonModule from "tns-core-modules/ui/button";
import * as stackLayoutModule from "tns-core-modules/ui/layouts/stack-layout";
import * as textFieldModule from "tns-core-modules/ui/text-field";
import * as observable from "tns-core-modules/data/observable";

export function stack0Loaded(args: observable.EventData) {
    var source = new observable.Observable();
    var stack0 = <stackLayoutModule.StackLayout>args.object;
    var target = stack0.getViewById<textFieldModule.TextField>("tf");
    var button = stack0.getViewById<textFieldModule.TextField>("btn");
    var bindingOptions = {
        sourceProperty: "textSource",
        targetProperty: "text"// ,
        // twoWay: true
    };
    target.bind(bindingOptions, source);
    source.set("textSource", "Text");

    button.on(buttonModule.Button.tapEvent, function () {
        button.text = source.get("textSource");
    });
}

export function stack1Loaded(args: observable.EventData) {
    var stack1 = <stackLayoutModule.StackLayout>args.object;
    stack1.bindingContext = { text: "Label" };
}

export function stack2Loaded(args: observable.EventData) {
    var stack2 = <stackLayoutModule.StackLayout>args.object;
    stack2.bindingContext = {
        myProperty: "Button",
        myFunction: () => {
            console.log("### onTap event ###");
        }
    };
}

export function stack3Loaded(args: observable.EventData) {
    var stack3 = <stackLayoutModule.StackLayout>args.object;
    stack3.bindingContext = { myItems: [{ text: "Label1" }, { text: "Label2" }] };
}